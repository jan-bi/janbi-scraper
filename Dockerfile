FROM mcr.microsoft.com/playwright:v1.52.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev --omit=optional
RUN npx playwright install-deps
COPY . .
RUN npx playwright install chromium
EXPOSE 8080
CMD ["node", "./src/app.js"]
