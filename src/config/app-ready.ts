export const appReady = (PORT: number | string): void => {
  console.log(
    `\n🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌🙌`,
  );
  console.log(`Application Running http://localhost:${PORT} initialized +1ms`);
  console.log(
    `Swagger Documentation http://localhost:${PORT}/api initialized +1ms`,
  );
};
