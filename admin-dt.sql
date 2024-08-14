-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.24 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for admin-dt
CREATE DATABASE IF NOT EXISTS `admin-dt` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `admin-dt`;

-- Dumping structure for table admin-dt.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `product_name` varchar(100) NOT NULL,
  `image` varchar(225) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT '0',
  `description` varchar(225) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- Dumping data for table admin-dt.product: ~0 rows (approximately)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `category_id`, `product_name`, `image`, `stock`, `description`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Beras 1kg', '1722208168267.jpeg', 35, 'Beras pera asal jawa tengah', '2024-07-28 09:54:15', '2024-07-29 06:09:28'),
	(3, 1, 'Kopi kapal api sachet', '1722211271341.jpeg', 25, 'Kopi sachet dari PT. Kapal Api Indonesia', '2024-07-28 09:54:15', '2024-07-29 07:01:11'),
	(4, 1, 'Sunlight 500ml', '1722211573674.jpeg', 55, 'Sunlight dari PT. XYZ', '2024-07-28 09:54:15', '2024-07-29 07:06:13'),
	(32, 5, 'Sikat Wc', '1722208025013.jpeg', 60, 'Alat pembersih closet', '2024-07-29 06:07:05', '2024-07-29 06:07:05');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- Dumping structure for table admin-dt.product_category
CREATE TABLE IF NOT EXISTS `product_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `description` varchar(225) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table admin-dt.product_category: ~0 rows (approximately)
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` (`id`, `category`, `description`, `created_at`, `updated_at`) VALUES
	(1, 'Makanan', 'Produk makanan untuk konsumsi', '2024-07-28 10:00:53', '2024-07-28 18:06:18'),
	(2, 'Minuman', 'Produk minuman untuk konsumsi', '2024-07-28 10:00:53', '2024-07-28 10:00:53'),
	(3, 'Perlengkapan Kebersihan', 'Produk alat kebersihan untuk rumah, kantor, dll', '2024-07-28 10:00:53', '2024-07-28 18:39:03'),
	(4, 'Perlengkapan Dapur / Kitchen Set', 'Produk peralatan keperluan dapur seperti alat masak dan kebersihan dapur', '2024-07-28 10:00:53', '2024-07-28 18:50:18'),
	(7, 'Mainan', 'Mainan untuk anak-anak', '2024-07-28 19:35:53', '2024-07-28 19:35:53'),
	(8, 'Perlengkapan kendaraan', 'peralatan kendaraan', '2024-07-29 07:55:44', '2024-07-29 07:55:59');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;

-- Dumping structure for table admin-dt.tr_product
CREATE TABLE IF NOT EXISTS `tr_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tr_id` varchar(100) NOT NULL,
  `tr_type` varchar(10) NOT NULL,
  `tr_product_id` int(11) NOT NULL,
  `tr_product_stock` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table admin-dt.tr_product: ~0 rows (approximately)
/*!40000 ALTER TABLE `tr_product` DISABLE KEYS */;
INSERT INTO `tr_product` (`id`, `tr_id`, `tr_type`, `tr_product_id`, `tr_product_stock`, `created_at`, `updated_at`) VALUES
	(1, '5700ad2c-4cef-11ef-bbe4-2cf05db7faee', 'Stock In', 1, 10, '2024-07-28 21:40:27', '2024-07-29 07:07:53'),
	(2, '5700ad2c-4cef-11ef-bbe4-2cf05db7faee', 'Stock In', 4, 10, '2024-07-28 21:43:32', '2024-07-29 07:08:01'),
	(3, '5700ad2c-4cef-11ef-bbe4-2cf05db7faee', 'Stock In', 3, 10, '2024-07-28 21:43:32', '2024-07-29 07:08:09'),
	(4, 'bbed6f25-572d-4b48-bc28-295c6b9b0472', 'Stock In', 1, 10, '2024-07-28 23:44:40', '2024-07-29 07:08:17'),
	(5, 'bbed6f25-572d-4b48-bc28-295c6b9b0472', 'Stock In', 4, 10, '2024-07-28 23:44:40', '2024-07-29 07:08:25'),
	(10, 'b3cf80b4-4522-47c0-acc4-5f6489aa26b7', 'Stock Out', 1, 20, '2024-07-29 07:33:01', '2024-07-29 07:33:01'),
	(11, '0ae92416-411c-4dd3-9082-85d324b2c92a', 'Stock In', 3, 25, '2024-07-29 07:57:52', '2024-07-29 07:57:52'),
	(12, '0ae92416-411c-4dd3-9082-85d324b2c92a', 'Stock Out', 1, 15, '2024-07-29 07:57:52', '2024-07-29 07:57:52'),
	(14, '980d0a36-a8bd-4b89-9f1f-e243366cb149', 'Stock Out', 1, 15, '2024-07-29 08:13:50', '2024-07-29 08:13:50'),
	(15, 'b82c3705-e28f-4074-8582-545d8f21c8e2', 'Stock In', 3, 20, '2024-07-29 08:14:38', '2024-07-29 08:14:38'),
	(16, '0e600864-5d22-40ae-aca0-7e79ade7d634', 'Stock In', 3, 10, '2024-07-29 08:17:12', '2024-07-29 08:17:12'),
	(17, '9b18c4a8-2e9e-41c2-900c-874e972acf43', 'Stock In', 1, 30, '2024-07-29 08:17:41', '2024-07-29 08:17:41'),
	(18, '9b18c4a8-2e9e-41c2-900c-874e972acf43', 'Stock In', 3, 20, '2024-07-29 08:17:41', '2024-07-29 08:17:41'),
	(19, '287a6a54-d1c6-4253-b802-3144dd3a856a', 'Stock Out', 1, 25, '2024-07-29 08:18:14', '2024-07-29 08:18:14'),
	(20, '287a6a54-d1c6-4253-b802-3144dd3a856a', 'Stock Out', 3, 5, '2024-07-29 08:18:14', '2024-07-29 08:18:14');
/*!40000 ALTER TABLE `tr_product` ENABLE KEYS */;

-- Dumping structure for table admin-dt.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table admin-dt.user: ~0 rows (approximately)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `birth_date`, `gender`, `created_at`, `updated_at`) VALUES
	(1, 'Muhammad', 'Valensyah Alfansyuri', 'valen@gmail.com', 'pas!', '1997-12-03', 'Pria', '2024-07-27 13:03:59', '2024-07-29 08:00:43'),
	(3, 'Ahmad', 'Bagus', 'Ahmad@gmail.com', 'admin!', '1995-05-02', 'Pria', '2024-07-29 08:02:25', '2024-07-29 08:02:25');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
