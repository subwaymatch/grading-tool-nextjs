-- CreateTable
CREATE TABLE `User` (
    `anonymousId` VARCHAR(191) NOT NULL,
    `netId` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `admin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_netId_key`(`netId`),
    PRIMARY KEY (`anonymousId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserRole` (
    `userId` VARCHAR(191) NOT NULL,
    `role` ENUM('GRADER', 'TA', 'REVIEWER', 'INSTRUCTOR', 'STUDENT') NOT NULL,

    PRIMARY KEY (`userId`, `role`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `className` VARCHAR(191) NOT NULL,
    `school` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Class_className_key`(`className`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rubric` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classId` INTEGER NOT NULL,
    `assignment` VARCHAR(191) NOT NULL,
    `questionName` VARCHAR(191) NOT NULL,
    `questionNumber` INTEGER NOT NULL,
    `questionPart` VARCHAR(191) NOT NULL,
    `questionDescription` VARCHAR(191) NOT NULL,
    `maxDeduction` DOUBLE NOT NULL,
    `solution` VARCHAR(191) NULL,
    `images` VARCHAR(191) NULL,
    `dateCreated` DATETIME(3) NOT NULL,
    `userAnonymousId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rubricId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `deduction` DOUBLE NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `dateCreated` DATETIME(3) NOT NULL,
    `userAnonymousId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClassToUser` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ClassToUser_AB_unique`(`A`, `B`),
    INDEX `_ClassToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserRole` ADD CONSTRAINT `UserRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`anonymousId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rubric` ADD CONSTRAINT `Rubric_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rubric` ADD CONSTRAINT `Rubric_userAnonymousId_fkey` FOREIGN KEY (`userAnonymousId`) REFERENCES `User`(`anonymousId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_rubricId_fkey` FOREIGN KEY (`rubricId`) REFERENCES `Rubric`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_userAnonymousId_fkey` FOREIGN KEY (`userAnonymousId`) REFERENCES `User`(`anonymousId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassToUser` ADD CONSTRAINT `_ClassToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClassToUser` ADD CONSTRAINT `_ClassToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`anonymousId`) ON DELETE CASCADE ON UPDATE CASCADE;
