FROM node:20

# ========================================
# Dependencias del sistema
# ========================================

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        python3 \
        python3-pip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# ========================================
# Dependencias Node
# ========================================

COPY package*.json ./

RUN npm install

# ========================================
# Dependencias Python
# ========================================

COPY requirements.txt ./

RUN pip3 install --break-system-packages --no-cache-dir \
    -r requirements.txt

# ========================================
# Código de la aplicación
# ========================================

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]