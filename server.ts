import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Initialize Google GenAI
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API Routes
app.post('/api/audit', async (req, res) => {
  try {
    const { url, businessName, goals } = req.body;
    if (!url) {
      return res.status(400).json({ error: 'Website URL is required' });
    }

    const prompt = `You are Amos Gbadebo, an expert Website Designer and SEO Specialist based in Nigeria with 3 years of experience helping brands scale globally. 
    Analyze the website URL "${url}" for business "${businessName || 'Business'}" with goals "${goals || 'Growth and Traffic'}".
    Provide a professional, actionable SEO and UI/UX Website Audit report in JSON format matching the requested schema.
    Include overall score (0-100), SEO score, UI/UX score, Speed score, 3 key strengths, 3 critical issues, and 3 high-impact recommendations written in Amos's expert, encouraging, professional voice.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallScore: { type: Type.INTEGER, description: 'Overall website score from 0 to 100' },
            seoScore: { type: Type.INTEGER, description: 'SEO score from 0 to 100' },
            uiuxScore: { type: Type.INTEGER, description: 'UI/UX design score from 0 to 100' },
            speedScore: { type: Type.INTEGER, description: 'Performance and speed score from 0 to 100' },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Three key website strengths'
            },
            issues: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Three critical issues found'
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Three high-impact recommendations from Amos Gbadebo'
            },
            estimatedGrowth: {
              type: Type.STRING,
              description: 'Estimated traffic or conversion growth after fixes (e.g. +150% in 90 days)'
            }
          },
          required: ['overallScore', 'seoScore', 'uiuxScore', 'speedScore', 'strengths', 'issues', 'recommendations', 'estimatedGrowth']
        }
      }
    });

    const resultText = response.text || '{}';
    const auditData = JSON.parse(resultText);
    res.json(auditData);
  } catch (error: any) {
    console.error('Audit generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate AI audit', 
      details: error.message || 'Unknown error' 
    });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, projectType, budget, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    // In a real app, this would send an email or store in database.
    console.log('New consultation inquiry received:', { name, email, projectType, budget, message });
    res.json({ success: true, message: 'Consultation request received successfully! Amos will get back to you within 24 hours.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Setup Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
