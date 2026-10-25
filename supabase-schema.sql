-- Esquema de base de datos para LlégateApp (Supabase / PostgreSQL)

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  telefono TEXT,
  rol TEXT CHECK (rol IN ('pasajero', 'conductor')) NOT NULL,
  subscription_tier TEXT CHECK (subscription_tier IN ('gratis', 'premium')) DEFAULT 'gratis',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla de vehículos
CREATE TABLE IF NOT EXISTS vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conductor_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tipo TEXT CHECK (tipo IN ('moto', 'carro', 'minivan')) NOT NULL,
  placa TEXT NOT NULL,
  fotos TEXT[] DEFAULT '{}',
  documentos_verificados BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla de viajes
CREATE TABLE IF NOT EXISTS trips (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pasajero_id UUID REFERENCES users(id) ON DELETE SET NULL,
  conductor_id UUID REFERENCES users(id) ON DELETE SET NULL,
  origen TEXT NOT NULL,
  destino TEXT NOT NULL,
  monto NUMERIC(10,2) NOT NULL,
  estado TEXT NOT NULL,
  metodo_pago TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Tabla de listings del marketplace
CREATE TABLE IF NOT EXISTS marketplace_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  negocio_id UUID REFERENCES users(id) ON DELETE CASCADE,
  categoria TEXT CHECK (categoria IN ('repuestos', 'taller', 'venta')) NOT NULL,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  es_destacado BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
