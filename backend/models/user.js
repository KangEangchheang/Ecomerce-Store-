const user = `CREATE TABLE IF NOT EXISTS USER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_type ENUM('admin','customer') NOT NULL,
    username varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    email varchar(100) UNIQUE,
    phone_number varchar(15) UNIQUE,
    profile_image varchar(100),
    isActive boolean,
    disabled_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL

)ENGINE = InnoDB`;

module.exports = user;