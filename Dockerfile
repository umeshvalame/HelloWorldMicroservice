
# Step 1: (Build) Install base image, install dependencie, build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Step 2: (Serve) serve the build artifact


FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


