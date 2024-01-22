const model = `CREATE TABLE IF NOT EXISTS discount (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    discount_type ENUM('percent','extra') NOT NULL,
    percent INT CHECK (percent >= 0 AND percent <= 100),
    minimum_pay FLOAT,

    start_discount TIMESTAMP,
    end_discount TIMESTAMP DEFAULT '2022-01-01 00:00:00',
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL

) ENGINE = InnoDB`;

module.exports = model;