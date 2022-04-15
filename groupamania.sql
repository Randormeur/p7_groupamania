

CREATE DATABASE IF NOT EXISTS `groupomania`;
DROP  TABLE IF EXISTS `groupomania`.`users`;
DROP  TABLE IF EXISTS `groupomania`.`posts`;
DROP  TABLE IF EXISTS `groupomania`.`comments`;
CREATE TABLE IF NOT EXISTS `groupomania`.`users` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`email` VARCHAR(250) NOT NULL COLLATE 'utf8mb3_general_ci',
	`name` VARCHAR(250) NOT NULL COLLATE 'utf8mb3_general_ci',
	`datebirth` DATE NULL DEFAULT NULL,
	`password` VARCHAR(250) NOT NULL COLLATE 'utf8mb3_general_ci',
	`isAdmin` BINARY(50) NULL DEFAULT 'false\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
	`createdAt` TIMESTAMP NULL DEFAULT NULL,
	`updatedAt` TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `email` (`email`) USING BTREE
);

CREATE TABLE IF NOT EXISTS `groupomania`.`posts` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`userid` INT(11) UNSIGNED NULL DEFAULT NULL,
	`title` VARCHAR(250) NOT NULL COLLATE 'utf8mb3_general_ci',
	`content` TEXT NOT NULL COLLATE 'utf8mb3_general_ci',
	`image` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`image_desc` TEXT NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`createdAt` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`updatedAt` TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `FK_posts_users` (`userid`) USING BTREE,
	CONSTRAINT `FK_posts_users` FOREIGN KEY (`userid`) REFERENCES `groupomania`.`users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS `groupomania`.`comments` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`userid` INT(10) UNSIGNED NOT NULL DEFAULT '0',
	`postid` INT(10) UNSIGNED NOT NULL DEFAULT '0',
	`content` TEXT NOT NULL COLLATE 'utf8mb3_general_ci',
	`createdAt` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`updatedAt` TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `FK__users` (`userid`) USING BTREE,
	INDEX `FK__posts` (`postid`) USING BTREE,
	CONSTRAINT `FK__posts` FOREIGN KEY (`postid`) REFERENCES `groupomania`.`posts` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `FK__users` FOREIGN KEY (`userid`) REFERENCES `groupomania`.`users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
);
