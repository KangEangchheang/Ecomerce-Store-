const banner = `CREATE TABLE IF NOT EXISTS banner_image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
) ENGINE = InnoDB`;

module.exports = banner;