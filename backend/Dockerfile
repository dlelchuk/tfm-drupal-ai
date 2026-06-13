FROM node:20

# Instalar Python + pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip

WORKDIR /app

# Instalar dependencias Node
COPY package*.json ./
RUN npm install

# Copiar código
COPY . .

# Instalar dependencias Python (todas las necesarias)
RUN pip3 install --break-system-packages \
    sentence-transformers \
    numpy \
    scikit-learn \
    fastapi \
    uvicorn

EXPOSE 3000

CMD ["node", "server.js"]