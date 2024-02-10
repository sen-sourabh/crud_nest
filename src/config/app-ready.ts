export const appReady = (PORT: number | string): void => {
  console.log(
    `\n🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌`,
  );
  console.log(
    `Project Documentation http://127.0.0.1:${PORT} | Run 'npm run g:doc' for the project documentation`,
  );
  console.log(`Swagger Documentation http://localhost:${PORT}/api`);
  console.log(`Application Running http://localhost:${PORT}`);
};
