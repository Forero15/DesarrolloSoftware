-- CreateTable
CREATE TABLE `Empresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_Empresa` VARCHAR(191) NOT NULL,
    `nit` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
