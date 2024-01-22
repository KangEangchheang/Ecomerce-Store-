const model = `CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    star_rating FLOAT DEFAULT 0.0,
    quantity INT NOT NULL,
    price FLOAT NOT NULL,
    discount_id INT,
    supplier_id INT,
    category_id INT,
    isfeatured BOOLEAN DEFAULT false,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,

    FOREIGN KEY (discount_id) REFERENCES discount(id),
    FOREIGN KEY (supplier_id) REFERENCES supplier(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
) ENGINE = InnoDB`;

module.exports = model;