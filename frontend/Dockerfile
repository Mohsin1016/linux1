# Use the official Nginx image from DockerHub
FROM nginx:latest

# Copy the HTML, CSS, and JS files to the appropriate Nginx folder
COPY ./ /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80

# Nginx will automatically serve the content from /usr/share/nginx/html
