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
-- Table structure for table `alimentation`
--

DROP TABLE IF EXISTS `alimentation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alimentation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_alim` varchar(75) NOT NULL DEFAULT 'Non concerné',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_alim_UNIQUE` (`name_alim`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alimentation`
--

LOCK TABLES `alimentation` WRITE;
/*!40000 ALTER TABLE `alimentation` DISABLE KEYS */;
INSERT INTO `alimentation` VALUES (1,'carnivore'),(4,'insectivore'),(5,'non concerne'),(3,'piscivore'),(2,'vegetivore');
/*!40000 ALTER TABLE `alimentation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_item_id` int NOT NULL,
  `nom_article` varchar(50) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `size_item_Llh` varchar(100) NOT NULL,
  `color_main` varchar(45) NOT NULL,
  `color_sec` varchar(45) NOT NULL DEFAULT 'Non renseigné',
  `env_id` int NOT NULL,
  `food_id` int NOT NULL,
  `nombre_element` int NOT NULL DEFAULT '1',
  `prix` int NOT NULL,
  PRIMARY KEY (`id`,`type_item_id`,`env_id`,`food_id`),
  UNIQUE KEY `nom_article_UNIQUE` (`nom_article`),
  KEY `fk_articles_type_item_idx` (`type_item_id`),
  KEY `fk_articles_alimentation1_idx` (`food_id`),
  KEY `fk_articles_environnement1_idx` (`env_id`),
  CONSTRAINT `fk_articles_alimentation1` FOREIGN KEY (`food_id`) REFERENCES `alimentation` (`id`),
  CONSTRAINT `fk_articles_environnement1` FOREIGN KEY (`env_id`) REFERENCES `environnement` (`id`),
  CONSTRAINT `fk_articles_type_article` FOREIGN KEY (`type_item_id`) REFERENCES `type_article` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,1,'Tyrannosaure Rex Noir',NULL,'31.6x09.5x14.4','noire','rouge',1,1,1,30),(2,1,'Tyrannosaure Rex Bleu',NULL,'28.0x09.5x14.0','bleue','rouge',1,1,1,25),(3,1,'Therizinosaure',NULL,'19.5x13.5x19.5','noire','rouge',1,2,1,23),(4,1,'Quetzalcoatle',NULL,'28.0x12.9x09.8','marron','blanc',2,1,1,23),(5,1,'Brachiosaure',NULL,'29.0x14.5x18.5','vert fonce','Non renseigné',1,2,1,23),(6,1,'Mosasaure',NULL,'32.2x11.8x06.6','turquoise','Non renseigné',3,1,1,23),(7,1,'Edmontosaure',NULL,'29.6x06.7x11.6','beige','marron',1,2,1,23),(8,3,'Vehicule de Capture Dino',NULL,'33.0x17.5x24.0','bleue','Non renseigné',1,5,5,60),(9,2,'Grande station de recherche Dino',NULL,'45.0x45.0x36.0','bleue','jaune',1,5,0,100);
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dinosaurs`
--

DROP TABLE IF EXISTS `dinosaurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dinosaurs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `length` int NOT NULL,
  `height` int NOT NULL,
  `size_cat_id` int NOT NULL,
  `posture_id` int NOT NULL,
  `order_id` int NOT NULL,
  `family` varchar(100) NOT NULL,
  `period_id` int NOT NULL,
  `strati_stag_id` int NOT NULL,
  `age` varchar(100) NOT NULL,
  `described_by` varchar(100) NOT NULL,
  `env_id` int NOT NULL,
  `food_id` int NOT NULL,
  `description` varchar(1000) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`,`size_cat_id`,`posture_id`,`order_id`,`period_id`,`strati_stag_id`,`env_id`,`food_id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_dinosaures_order1_idx` (`order_id`),
  KEY `fk_dinosaures_period1_idx` (`period_id`),
  KEY `fk_dinosaures_stratigraphic_stage1_idx` (`strati_stag_id`),
  KEY `fk_dinosaurs_environnement1_idx` (`env_id`),
  KEY `fk_dinosaurs_alimentation1_idx` (`food_id`),
  KEY `fk_dinosaurs_posture1_idx` (`posture_id`),
  KEY `fk_dinosaurs_size category1_idx` (`size_cat_id`),
  CONSTRAINT `fk_dinosaures_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  CONSTRAINT `fk_dinosaures_period1` FOREIGN KEY (`period_id`) REFERENCES `period` (`id`),
  CONSTRAINT `fk_dinosaures_stratigraphic_stage1` FOREIGN KEY (`strati_stag_id`) REFERENCES `stratigraphic_stage` (`id`),
  CONSTRAINT `fk_dinosaurs_alimentation1` FOREIGN KEY (`food_id`) REFERENCES `alimentation` (`id`),
  CONSTRAINT `fk_dinosaurs_environnement1` FOREIGN KEY (`env_id`) REFERENCES `environnement` (`id`),
  CONSTRAINT `fk_dinosaurs_posture1` FOREIGN KEY (`posture_id`) REFERENCES `posture` (`id`),
  CONSTRAINT `fk_dinosaurs_size category1` FOREIGN KEY (`size_cat_id`) REFERENCES `size category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dinosaurs`
--

LOCK TABLES `dinosaurs` WRITE;
/*!40000 ALTER TABLE `dinosaurs` DISABLE KEYS */;
INSERT INTO `dinosaurs` VALUES (1,'Diplodocus',25,6,5,2,1,'Diplodocidae',8,17,'- 155.7 Ma >> - 145 Ma','Othniel Charles Marsh ',1,2,"Diplodocus est un genre éteint de très grands dinosaures herbivores sauropodes de la famille des diplodocidés ayant vécu au Jurassique supérieur (Kimméridgien supérieur), il y a environ entre 154 et 152 Ma, en Amérique du Nord où il a été découvert dans les parties moyenne et supérieure de la formation de Morrison dans les États de l\'ouest des États-Unis.",NULL),(2,'Allosaurus',9,3,4,1,1,'Allosauridae',8,17,'- 157 Ma >> -145 Ma','Othniel Charles Marsh ',1,1,'Allosaurus (« lézard différent ») est un genre éteint et fossile de dinosaures théropodes ayant vécu il y a 155 à 150 millions d’années environ, au Kimméridgien et au Tithonien (Jurassique supérieur) dans ce qui est actuellement l’Amérique du Nord et l’Europe.',NULL);
/*!40000 ALTER TABLE `dinosaurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `environnement`
--

DROP TABLE IF EXISTS `environnement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `environnement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_env` varchar(75) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_env_UNIQUE` (`name_env`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `environnement`
--

LOCK TABLES `environnement` WRITE;
/*!40000 ALTER TABLE `environnement` DISABLE KEYS */;
INSERT INTO `environnement` VALUES (2,'aerien'),(3,'marin'),(1,'terrestre');
/*!40000 ALTER TABLE `environnement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favori`
--

DROP TABLE IF EXISTS `favori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favori` (
  `utilisateur_id` int NOT NULL,
  `articles_id` int NOT NULL,
  PRIMARY KEY (`utilisateur_id`,`articles_id`),
  KEY `fk_articles_has_utilisateur_utilisateur1_idx` (`utilisateur_id`),
  KEY `fk_articles_has_utilisateur_articles1_idx` (`articles_id`),
  CONSTRAINT `fk_articles_has_utilisateur_articles1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_articles_has_utilisateur_utilisateur1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favori`
--

LOCK TABLES `favori` WRITE;
/*!40000 ALTER TABLE `favori` DISABLE KEYS */;
/*!40000 ALTER TABLE `favori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_order` varchar(75) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_order_UNIQUE` (`name_order`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (2,'ornithischiens'),(1,'saurischiens');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `period`
--

DROP TABLE IF EXISTS `period`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `period` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_period` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_period_UNIQUE` (`name_period`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `period`
--

LOCK TABLES `period` WRITE;
/*!40000 ALTER TABLE `period` DISABLE KEYS */;
INSERT INTO `period` VALUES (9,'Cretace'),(10,'Cretace inferieur'),(11,'Cretace superieur'),(5,'Jurassique'),(6,'Jurassique inferieur'),(7,'Jurassique moyen'),(8,'Jurassique superieur'),(1,'Trias'),(2,'Trias inferieur'),(3,'Trias moyen'),(4,'Trias superieur');
/*!40000 ALTER TABLE `period` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posture`
--

DROP TABLE IF EXISTS `posture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_posture` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_posture_UNIQUE` (`name_posture`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posture`
--

LOCK TABLES `posture` WRITE;
/*!40000 ALTER TABLE `posture` DISABLE KEYS */;
INSERT INTO `posture` VALUES (1,'bipede'),(3,'mixte'),(5,'nageante'),(2,'quadrupede'),(4,'volante');
/*!40000 ALTER TABLE `posture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size category`
--

DROP TABLE IF EXISTS `size category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_catsiz` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_catsiz_UNIQUE` (`name_catsiz`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size category`
--

LOCK TABLES `size category` WRITE;
/*!40000 ALTER TABLE `size category` DISABLE KEYS */;
INSERT INTO `size category` VALUES (5,'gigantesque'),(4,'grande'),(1,'minuscule'),(3,'moyenne'),(2,'petite');
/*!40000 ALTER TABLE `size category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stratigraphic_stage`
--

DROP TABLE IF EXISTS `stratigraphic_stage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stratigraphic_stage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name_stratStag` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_stratStag_UNIQUE` (`name_stratStag`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stratigraphic_stage`
--

LOCK TABLES `stratigraphic_stage` WRITE;
/*!40000 ALTER TABLE `stratigraphic_stage` DISABLE KEYS */;
INSERT INTO `stratigraphic_stage` VALUES (12,'Aalenien'),(24,'Albien'),(3,'Anisien'),(23,'Aptien'),(13,'Bajocien'),(22,'Barremien'),(14,'Bathonien'),(19,'Berriasien'),(15,'Callovien'),(29,'Campanien'),(5,'Carnien'),(25,'Cenomanien'),(27,'Coniacien'),(21,'Hauterivien'),(8,'Hettangien'),(1,'Indusien'),(17,'Kimmeridgien'),(4,'Ladinien'),(30,'Maastrichtien'),(6,'Norien'),(2,'Olenekien'),(16,'Oxofordien'),(10,'Pliensbachien'),(7,'Rhetien'),(28,'Santonien'),(9,'Sinemurien'),(18,'Tithonien'),(11,'Toarcien'),(26,'Turonien'),(20,'Valanginien');
/*!40000 ALTER TABLE `stratigraphic_stage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_article`
--

DROP TABLE IF EXISTS `type_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_typeArt` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nom_type_UNIQUE` (`nom_typeArt`)
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
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateurs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `pseudo` varchar(55) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `inscription_date` date NOT NULL DEFAULT (date_format(now(),_utf8mb4'%Y-%m-%d')),
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `pseudo_UNIQUE` (`pseudo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateurs`
--

LOCK TABLES `utilisateurs` WRITE;
/*!40000 ALTER TABLE `utilisateurs` DISABLE KEYS */;
INSERT INTO `utilisateurs` VALUES (1,'Ezra','Bridger','**_BoGoss_2_Lothal_**','ezra.bridger@planete-lothal-empire.com','$argon2id$v=19$m=65536,t=5,p=1$FWGL9NTYzXY4Fq5XRfNQcA$xpBW9sf/0Rfcl3ZUYY8uAR6Iw2kGQbIVnrZxMJTqq5I',NULL,'2023-09-26','blooob28'),(2,'Jarrus','Kannan','...Almost_Jedi...','kannan.jarrus@compagnieminiere.unv','$argon2id$v=19$m=65536,t=5,p=1$VpV4jV+wxYXdZVrcnv/beg$0iu3KFrYhvqR+CKCxRQ1bxy+lvZeMkY8EK04ZKY5fdk','http','2023-09-26','blooob29'),(3,'Ahsoka','Tano','AsTa','ahsoka.tano@rebellion.unv','$argon2id$v=19$m=65536,t=5,p=1$SYX9SxkUxb9iAJXiE6/ALQ$nluTlJFvcVZof/tbzsHKlqXQa683yUh8CX7I3nKy8B8','none','2023-09-27','blooob32');
/*!40000 ALTER TABLE `utilisateurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateurs_has_articles`
--

DROP TABLE IF EXISTS `utilisateurs_has_articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateurs_has_articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `utilisateurs_id` int NOT NULL,
  `articles_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `total` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`utilisateurs_id`,`articles_id`),
  KEY `fk_utilisateurs_has_articles_articles1_idx` (`articles_id`),
  KEY `fk_utilisateurs_has_articles_utilisateurs1_idx` (`utilisateurs_id`),
  CONSTRAINT `fk_utilisateurs_has_articles_articles1` FOREIGN KEY (`articles_id`) REFERENCES `articles` (`id`),
  CONSTRAINT `fk_utilisateurs_has_articles_utilisateurs1` FOREIGN KEY (`utilisateurs_id`) REFERENCES `utilisateurs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateurs_has_articles`
--

LOCK TABLES `utilisateurs_has_articles` WRITE;
/*!40000 ALTER TABLE `utilisateurs_has_articles` DISABLE KEYS */;
/*!40000 ALTER TABLE `utilisateurs_has_articles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-02 16:53:05
