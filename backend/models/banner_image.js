const banner = `CREATE TABLE IF NOT EXISTS banner_image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
) ENGINE = InnoDB`;

module.exports = banner;


// const model = `CREATE TABLE IF NOT EXISTS image (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     image TEXT NOT NULL,
//     product_id INT,
//     supplier_id INT,

//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     deleted_at TIMESTAMP NULL,

//     FOREIGN KEY (product_id) REFERENCES product(id),
//     FOREIGN KEY (supplier_id) REFERENCES supplier(id)
// ) ENGINE = InnoDB`;

// module.exports = model;