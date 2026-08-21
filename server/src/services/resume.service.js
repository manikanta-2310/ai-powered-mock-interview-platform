import { PDFParse } from 'pdf-parse';
import Resume from '../models/Resume.model.js';

export const parseResumePDF = async (pdfBuffer) => {
  try {
    const parser = new PDFParse({ data: pdfBuffer });

    const result = await parser.getText();

    await parser.destroy();

    const extractedText = result.text?.trim();

    if (!extractedText) {
      throw new Error('No text could be extracted from the PDF');
    }

    return extractedText;
  } catch (error) {
    console.error('PDF Parse Error:', error.message);
    throw new Error('Failed to parse PDF. Please upload a valid PDF file.');
  }
};

export const saveResume = async (userId, fileName, extractedText) => {
  const resume = await Resume.findOneAndUpdate(
    { userId },
    { userId, fileName, extractedText },
    { returnDocument: 'after', upsert: true }
  );

  return resume;
};

export const getUserResume = async (userId) => {
  const resume = await Resume.findOne({ userId }).select('-__v');
  return resume;
};