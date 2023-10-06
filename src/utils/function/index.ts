import mongoose from 'mongoose';

export const getEmailUsername = (email: string): string => {
  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    // If "@" symbol is not found in the email, return the original email
    return email;
  }

  // Extract the part of the email before the "@" symbol
  const username = email.substring(0, atIndex);
  return username;
};

// Function to convert a string to ObjectId
export const stringToObjectId = (str: string): mongoose.Types.ObjectId | null => {
  try {
    return new mongoose.Types.ObjectId(str);
  } catch (error) {
    // Handle invalid input, e.g., return null or throw an error
    return null;
  }
};

// Function to convert an ObjectId to a string
export const objectIdToString = (objectId: mongoose.Types.ObjectId): string | null => {
  try {
    return objectId.toString();
  } catch (error) {
    // Handle invalid input, e.g., return null or throw an error
    return null;
  }
};