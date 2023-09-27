-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: p4_dino
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `p4_dino`
--

/*!40000 DROP DATABASE IF EXISTS `p4_dino`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `p4_dino` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `p4_dino`;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_article_id` int NOT NULL,
  `nom_article` varchar(50) NOT NULL,
  `taille_article(Lxlxh)` varchar(100) NOT NULL DEFAULT 'Non renseigné',
  `couleur_principale` varchar(45) NOT NULL DEFAULT 'Non renseigné',
  `couleur_secondaire` varchar(45) NOT NULL DEFAULT 'Non renseigné',
  `environnement` varchar(50) NOT NULL DEFAULT 'Non renseigné',
  `alimentation` varchar(50) NOT NULL DEFAULT 'Non concerné',
  `nombre_articles` int NOT NULL DEFAULT '1',
  `prix` int NOT NULL,
  PRIMARY KEY (`id`,`type_article_id`),
  UNIQUE KEY `nom_article_UNIQUE` (`nom_article`),
  KEY `fk_articles_type_article_idx` (`type_article_id`),
  CONSTRAINT `fk_articles_type_article` FOREIGN KEY (`type_article_id`) REFERENCES `type_article` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,1,'Tyrannosaure Rex Noir','31.6x09.5x14.4','noire','rouge','terrestre','carnivore',1,30),(2,1,'Tyrannosaure Rex Bleu','28.0x09.5x14.0','bleue','rouge','terrestre','carnivore',1,25),(3,1,'Therizinosaure','19.5x13.5x19.5','noire','rouge','terrestre','carnivore',1,23),(4,1,'Quetzalcoatle','28.0x12.9x09.8','marron','blanc','aerien','carnivore',1,23),(5,1,'Brachiosaure','29.0x14.5x18.5','vert fonce','Non renseigné','terrestre','vegetivore',1,23),(6,1,'Mosasaure','32.2x11.8x06.6','turquoise','Non renseigné','marin','carnivore',1,23),(7,1,'Edmontosaure','29.6x06.7x11.6','beige','marron','terrestre','vegetivore',1,23),(8,3,'Vehicule de Capture Dino','33.0x17.5x24.0','bleue','Non renseigné','terrestre','Non concerné',5,60),(9,2,'Grande station de recherche Dino','45.0x45.0x36.0','bleue','jaune','terrestre','Non concerné',0,100);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favori`
--

DROP TABLE IF EXISTS `favori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favori` (
  `articles_id` int NOT NULL,
  `utilisateur_id` int NOT NULL,
  PRIMARY KEY (`articles_id`,`utilisateur_id`),
  KEY `fk_articles_has_utilisateur_utilisateur1_idx` (`utilisateur_id`),
  KEY `fk_articles_has_utilisateur_articles1_idx` (`articles_id`),
  CONSTRAINT `fk_articles_has_utilisateur_articles1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_articles_has_utilisateur_utilisateur1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favori`
--

LOCK TABLES `favori` WRITE;
/*!40000 ALTER TABLE `favori` DISABLE KEYS */;
INSERT INTO `favori` VALUES (2,1),(6,1),(8,1),(2,2),(9,2);
/*!40000 ALTER TABLE `favori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_article`
--

DROP TABLE IF EXISTS `type_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_type_UNIQUE` (`nom_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_article`
--

LOCK TABLES `type_article` WRITE;
/*!40000 ALTER TABLE `type_article` DISABLE KEYS */;
INSERT INTO `type_article` VALUES (2,'batiment'),(1,'figurine'),(3,'vehicule');
/*!40000 ALTER TABLE `type_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prénom` varchar(100) NOT NULL,
  `pseudo` varchar(55) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `inscription_date` date NOT NULL DEFAULT (date_format(now(),_utf8mb4'%Y-%m-%d')),
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `pseudo_UNIQUE` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'Ezra','Bridger','**_BoGoss_2_Lothal_**','ezra.bridger@planete-lothal-empire.com','$argon2id$v=19$m=65536,t=5,p=1$KBUneXfkFdloT0Wzb9nJDQ$DZ3NG3yPSLkiBXoZn7BF5z7cK5EB7ZBCPv8VOoxVlxU',NULL,'2023-09-25','blooob28'),(2,'Jarrus','Kannan','...Almost_Jedi...','kannan.jarrus@compagnieminiere.unv','$argon2id$v=19$m=65536,t=5,p=1$KBUneXfkFdloT0Wzb9nJDQ$DZ3NG3yPSLkiBXoZn7BF5z7cK5EB7ZBCPv8VOoxVlxU','http','2023-09-25','blooob29');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-25 11:00:55
