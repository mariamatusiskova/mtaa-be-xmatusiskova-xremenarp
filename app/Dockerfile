FROM node:20.11.1-alpine
COPY . /app
WORKDIR /app
RUN mkdir -p node_modules 
RUN chown -R node:node node_modules
USER node
RUN npm ci
EXPOSE 8080
CMD ["node", "."]

