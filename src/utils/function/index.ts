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
