-- Agriculture Management System (AMS) - Database Schema

-- Users Table: Handles both Admins and Farmers
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL CHECK (role IN ('Admin', 'Farmer')),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ResearchArticles Table: Knowledge base managed by Admins
CREATE TABLE ResearchArticles (
    id SERIAL PRIMARY KEY,
    admin_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    crop_name VARCHAR(255) NOT NULL,
    ideal_soil_type VARCHAR(255) NOT NULL,
    required_moisture_level VARCHAR(255) NOT NULL,
    ideal_climate VARCHAR(255) NOT NULL,
    season VARCHAR(255) NOT NULL,
    cultivation_process TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Fertilizers Table: Associated with Research Articles
CREATE TABLE Fertilizers (
    id SERIAL PRIMARY KEY,
    article_id INTEGER NOT NULL REFERENCES ResearchArticles(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    usage_instructions TEXT NOT NULL
);

-- AnalysisHistory Table: Stores farmers' AI land analysis results
CREATE TABLE AnalysisHistory (
    id SERIAL PRIMARY KEY,
    farmer_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    soil_type VARCHAR(255) NOT NULL,
    moisture VARCHAR(255) NOT NULL,
    weather_data JSONB NOT NULL,
    recommended_crop VARCHAR(255),
    analysis_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance on commonly queried fields
CREATE INDEX idx_articles_soil_climate ON ResearchArticles(ideal_soil_type, ideal_climate);
CREATE INDEX idx_analysis_farmer ON AnalysisHistory(farmer_id);
