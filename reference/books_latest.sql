-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: SP89@bookkeeping
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isbn` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `description` text COLLATE utf8_estonian_ci,
  `published_year` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `publisher` varchar(45) COLLATE utf8_estonian_ci DEFAULT NULL,
  `updated_at` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  `created_at` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_estonian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'123442123, 97885654453443','Learn how to build modern web application with MEAN stack','modern_web_application.jpg','Didin J.','The comprehensive step by step tutorial on how to build MEAN (MongoDB, Express.js, Angular 5 and Node.js) stack web application from scratch.','2017','Djamware.com','2019-04-05 07:30:35','2019-04-05 07:30:35'),(2,'9781617292422,1617292427','Express in Action: Writing, building, and testing Node.js applications','express_action.jpg','Evan Hahn','Express in Action is a carefully designed tutorial that teaches you how to build web applications using Node and Express','2016','Manning Publications','2019-04-05 07:30:35','2019-04-05 07:30:35'),(3,'9781617292033,1617292036','Getting MEAN with Mongo, Express, Angular, and Node','getting_mean.jpg','Simon Holmes','Getting MEAN teaches you how to develop web applications using the MEAN stack.','2018','Manning Publications','2019-04-05 08:30:45','2019-04-05 08:30:45'),(4,'9781783981083,1783981083','Mastering Web Application Development with Express','mastering_web_application.jpg','Alexandru Vladutu','A comprehensive guide to developing production-ready web applications with Express','2014','Packt Publishing','2019-04-05 08:42:12','2019-04-05 08:42:12');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'SP89@bookkeeping'
--

--
-- Dumping routines for database 'SP89@bookkeeping'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-05 19:02:44
