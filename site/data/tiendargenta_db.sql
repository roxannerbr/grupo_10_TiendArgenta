-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tiendargenta_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carritos`
--

DROP TABLE IF EXISTS `carritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carritos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuariosId` int(11) NOT NULL,
  `productosId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuariosId` (`usuariosId`),
  KEY `productosId` (`productosId`),
  CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`usuariosId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `carritos_ibfk_2` FOREIGN KEY (`productosId`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritos`
--

LOCK TABLES `carritos` WRITE;
/*!40000 ALTER TABLE `carritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Cotillon','2022-10-21 19:51:37','2022-10-21 19:51:37'),(2,'Coleccionables','2022-10-21 19:51:37','2022-10-21 19:51:37'),(3,'Mujer','2022-10-21 19:51:37','2022-10-21 19:51:37'),(4,'Hombre','2022-10-21 19:51:37','2022-10-21 19:51:37'),(5,'Infantil','2022-10-21 19:51:37','2022-10-21 19:51:37');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historiales`
--

DROP TABLE IF EXISTS `historiales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historiales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `categoriasId` int(11) NOT NULL,
  `subCategoriasId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriasId` (`categoriasId`),
  KEY `subCategoriasId` (`subCategoriasId`),
  CONSTRAINT `historiales_ibfk_1` FOREIGN KEY (`categoriasId`) REFERENCES `categorias` (`id`),
  CONSTRAINT `historiales_ibfk_2` FOREIGN KEY (`subCategoriasId`) REFERENCES `subcategorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historiales`
--

LOCK TABLES `historiales` WRITE;
/*!40000 ALTER TABLE `historiales` DISABLE KEYS */;
INSERT INTO `historiales` VALUES (1,'Mochila Seleccion',7,20000,5,'Para que no te olvides nada',2,3,'2022-10-21 19:58:26','2022-10-21 19:58:26'),(2,'Medias violeta',5,3000,5,'Medias sexys violetas para la noche de boda..',3,3,'2022-10-21 19:59:41','2022-10-21 19:59:41'),(3,'Bucaneras con borde violeta (medias)',87,5000,10,'Medias sexys violetas para la noche de boda..',3,3,'2022-10-21 20:00:26','2022-10-21 20:00:26'),(4,'Camiseta infantil suplente',18,14000,10,'para el mas chiquito de la casa, talle unico',5,1,'2022-10-21 20:01:15','2022-10-21 20:01:15'),(6,'Remera con detalle en bolsillo',10,15000,10,'Una remera blanco con detalle de bolsillo camuflado',2,1,'2022-11-25 21:07:30','2022-11-25 21:07:30');
/*!40000 ALTER TABLE `historiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historialesimagenes`
--

DROP TABLE IF EXISTS `historialesimagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historialesimagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `historialesId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `historialesId` (`historialesId`),
  CONSTRAINT `historialesimagenes_ibfk_1` FOREIGN KEY (`historialesId`) REFERENCES `historiales` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historialesimagenes`
--

LOCK TABLES `historialesimagenes` WRITE;
/*!40000 ALTER TABLE `historialesimagenes` DISABLE KEYS */;
INSERT INTO `historialesimagenes` VALUES (1,'img-1666382298580.png',1,'2022-10-21 19:58:26','2022-10-21 19:58:26'),(2,'img-1666382372885.png',2,'2022-10-21 19:59:41','2022-10-21 19:59:41'),(3,'img-1666382418296.png',3,'2022-10-21 20:00:26','2022-10-21 20:00:26'),(4,'img-1666382466804.png',4,'2022-10-21 20:01:15','2022-10-21 20:01:15'),(6,'img-1669410443462.png',6,'2022-11-25 21:07:30','2022-11-25 21:07:30');
/*!40000 ALTER TABLE `historialesimagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `productosId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productosId` (`productosId`),
  CONSTRAINT `imagenes_ibfk_1` FOREIGN KEY (`productosId`) REFERENCES `productos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'Kit-Clasico.png',1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(2,'Kit-Glitter.png',2,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(3,'Kit-Hincha.png',3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(4,'Kit-Globos.png',4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(5,'Combo-Fan.png',5,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(6,'Combo-Gorros.png',6,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(7,'Combo-Parejas.png',7,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(8,'Combo-Vinchas.png',8,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(9,'Col-Aguero.png',9,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(10,'Col-Messi.png',10,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(11,'Col-CopaMundial.png',11,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(12,'Col-Pelota.png',12,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(13,'Col-Mascota.png',13,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(14,'Col-Funkopop.png',14,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(15,'Col-titular.png',15,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(16,'Col-alternativa.png',16,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(17,'Inf-vasoTermico.png',17,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(18,'Inf-manta.png',18,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(19,'Inf-perfume.png',19,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(20,'Inf-botella.png',20,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(21,'Inf-Messi.png',21,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(22,'Inf-Titular.png',22,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(23,'Inf-alternativa.png',23,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(24,'Inf-pantalon.png',24,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(25,'M-titular.png',25,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(26,'M-Alternativa.png',26,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(27,'M-Medias.png',27,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(28,'M-copaamerica.png',28,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(29,'M-shortblanco.png',29,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(30,'M-pantalon.png',30,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(31,'H-Medias.png',31,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(32,'H-pantalon.png',32,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(33,'H-titular.png',33,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(34,'H-messi.png',34,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(35,'H-shortblanco.png',35,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(36,'H-shortnegro.png',36,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(37,'H-AlterLarga.png',37,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(38,'H-Alter.png',38,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(39,'img-1666381964814.png',39,'2022-10-21 19:52:45','2022-10-21 19:52:45'),(40,'img-1666382027331.png',40,'2022-10-21 19:53:47','2022-10-21 19:53:47'),(41,'img-1666382066328.png',41,'2022-10-21 19:54:26','2022-10-21 19:54:26'),(42,'img-1666382110781.png',42,'2022-10-21 19:55:11','2022-10-21 19:55:11'),(43,'img-1666382151744.png',43,'2022-10-21 19:55:52','2022-10-21 19:55:52'),(44,'img-1666382197389.png',44,'2022-10-21 19:56:37','2022-10-21 19:56:37'),(45,'img-1666382255167.png',45,'2022-10-21 19:57:35','2022-10-21 19:57:35'),(51,'img-1668726075604.png',51,'2022-11-17 23:01:16','2022-11-17 23:01:16'),(52,'img-1668726892512.png',52,'2022-11-17 23:14:53','2022-11-17 23:14:53'),(53,'img-1668726934519.png',53,'2022-11-17 23:15:34','2022-11-17 23:15:34'),(54,'img-1668727030096.png',54,'2022-11-17 23:17:10','2022-11-17 23:17:10'),(55,'img-1668727075641.png',55,'2022-11-17 23:17:55','2022-11-17 23:17:55'),(56,'img-1668731378432.png',56,'2022-11-18 00:21:45','2022-11-18 00:29:38'),(57,'img-1668731399166.png',57,'2022-11-18 00:22:29','2022-11-18 00:29:59'),(58,'img-1668731343459.png',58,'2022-11-18 00:23:12','2022-11-18 00:29:03'),(59,'img-1668731313391.png',59,'2022-11-18 00:24:04','2022-11-18 00:28:33'),(60,'img-1668731272509.png',60,'2022-11-18 00:24:57','2022-11-18 00:27:53'),(61,'img-1668731640585.png',61,'2022-11-18 00:34:00','2022-11-18 00:34:00'),(62,'img-1668731927139.png',62,'2022-11-18 00:38:47','2022-11-18 00:38:47');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuariosId` int(11) NOT NULL,
  `carritosId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuariosId` (`usuariosId`),
  KEY `carritosId` (`carritosId`),
  CONSTRAINT `ordenes_ibfk_1` FOREIGN KEY (`usuariosId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `ordenes_ibfk_2` FOREIGN KEY (`carritosId`) REFERENCES `carritos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `categoriasId` int(11) NOT NULL,
  `subCategoriasId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriasId` (`categoriasId`),
  KEY `subCategoriasId` (`subCategoriasId`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoriasId`) REFERENCES `categorias` (`id`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`subCategoriasId`) REFERENCES `subcategorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Maquillaje clasico ',15,750,5,'Si sos de los clasicos este mkup es para vos.',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(2,'Maquillaje glitter',15,800,5,'Por que festejamos los goles a las 7am con mucho glitter',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(3,'Kit Hincha',5,8500,0,'Sos re hincha? este combo es para vos',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(4,'Kit Globos',10,2800,15,'Por ahi tenemos cumpleañito en pleno mundial',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(5,'Combo Fan',20,5000,10,'El combo ideal para vos..',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(6,'Combo Gorros x6',13,6500,15,'Son muchos en la familia? este combo es ideal para vos',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(7,'Combo Pareja',20,1500,0,'El combo perfecto para vos y tu pareja',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(8,'Combo Vinchas',25,1500,5,'Hechas a mano con mucho amor de nuestras programadoras',1,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(9,'Aguero Miniatura',2,700,0,'Kun siempre en nuestros corazones',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(10,'Messi Cabezon 3D',25,1500,5,'Un Messi cabezon impreso por Pato',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(11,'Copa del Mundo 3D',25,2500,10,'Aun no tenes tu copa del mundo?, y como vas a ir a festejar al obelisco?',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(12,'Pelota Qatar \'22',15,45500,10,'Pelota N°5 OFICIAL Competición MUNDIAL - 2022',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(13,'Mascota Mundial \'22',5,4000,5,'El fantasmita para asustarte en las noches... buuuu',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(14,'Funko Pop Messi',2,3800,10,'Un mini Messi para la mesita de luz',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(15,'Camiseta Edicion Especial Titular',25,1500,5,'Ediciones especiales, queres ser unico? esta es tu camiseta',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(16,'Camiseta Edicion Especial Alternativa',25,1500,5,'Ediciones especiales, queres ser unico? esta es tu camiseta',2,4,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(17,'Vaso Termico Seleccion',25,700,5,'Para que tengas el mate cocido siempre caliente. Pico vertedor. Capacidad 500ml',5,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(18,'Manta Luminosa',12,7500,10,'Manta Fluorecente Seleccion Argenntina - AFA, para que encuentres la cama en las noches sin luz.',5,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(19,'Perfume Cancha',12,700,30,'Fragancia a choripan',5,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(20,'Botella Reutilizable',25,500,0,'botella reutilizable de Polipropileno bpa free capacidad 700cc',5,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(21,'Camiseta Titular Messi',5,18000,0,'Una camiseta de la Selección Argentina con la estampa de Messi, hecha con material reciclado',5,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(22,'Camiseta Titular Seleccion',10,15000,0,'100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY.',5,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(23,'Camiseta Alternativa Seleccion',20,15000,30,'Presentamos la nueva Camiseta Infantil Adidas Alternativa de Juego de la Selección Argentina para la temporada 2019/2020',5,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(24,'Pantalon Presentacion',20,14000,30,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',5,2,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(25,'Camiseta Titular',20,15000,0,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',3,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(26,'Camiseta Alternativa Mujer',5,15000,30,'Dedicada a la tierra que nos hace soñar. El kit de visitante de Argentina es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país.',3,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(27,'Medias Mujer',10,3500,0,'Siempre Argentina hasta los pies. Estas medias de fútbol adidas lucen los clásicos colores del uniforme de la selección y ofrecen amortiguación localizada y soporte en el arco.',3,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(28,'Camiseta Copa America',10,10000,10,'Las camisetas viejitas, pero mas baratas. Camiseta Celeste Adidas Seleccion Argentina - Copa America 2021',3,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(29,'Short Seleccion Blanco',10,3000,10,'Un short re fachero de la seleccion',3,2,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(30,'Pantalon Presentacion',5,14000,30,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',3,2,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(31,'Medias Blancas',10,4000,10,'Siempre Argentina hasta los pies. Estas medias de fútbol adidas lucen los clásicos colores del uniforme de la selección y ofrecen amortiguación localizada y soporte en el arco.',4,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(32,'Pantalon Presentacion',20,14000,30,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',4,3,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(33,'Camiseta Titular',20,17000,10,'100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY.',4,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(34,'Camiseta Titular Messi',20,19000,10,'Una camiseta de la Selección Argentina con la estampa de Messi, hecha con material reciclado',4,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(35,'Short Seleccion Blanco',5,10000,10,'Un short re fachero de la seleccion',4,2,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(36,'Short Seleccion',6,10000,10,'Un short re fachero de la seleccion',4,2,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(37,'Alternativa Manga Larga',9,23000,30,'Para que no tengas frio en invierno',4,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(38,'Camiseta Alternativa Hombre  ',13,17000,30,'Para que no tengas frio en invierno',4,1,'2022-10-21 19:51:37','2022-10-21 19:51:37'),(39,'Chaleco reversible',10,26000,5,'Presentamos el nuevo chaleco reversible oficial de la Selección Argentina de Futbol . Indumentaria oficial AFA para la Copa América 2020',4,3,'2022-10-21 19:52:45','2022-10-21 19:52:45'),(40,'Bufanda Seleccion',24,6500,5,'Para que no tengas frio',5,3,'2022-10-21 19:53:47','2022-10-21 19:53:47'),(41,'Camiseta suplente mujer',18,16000,0,'Presentamos la camiseta suplente de mujer.',3,1,'2022-10-21 19:54:26','2022-10-21 19:54:26'),(42,'Camisita veraniega',10,24000,5,'Para salir a tomar una birra',4,1,'2022-10-21 19:55:11','2022-10-21 19:55:11'),(43,'Camiseta arquero suplente',10,16000,5,'Atajate este penal',4,1,'2022-10-21 19:55:51','2022-10-21 19:55:51'),(44,'Gorra',43,5000,10,'Para no insolarte',2,3,'2022-10-21 19:56:37','2022-10-21 19:56:37'),(45,'Campera reversible',5,36000,10,'Presentamos el nuevo campera reversible oficial de la Selección Argentina de Futbol . Indumentaria oficial AFA para la Copa América 2020',3,4,'2022-10-21 19:57:35','2022-10-21 19:57:35'),(51,'Mochila Seleccion',10,8999,5,'UNA MOCHILA RESISTENTE PARA APOYAR A LA SELECCIÓN ARGENTINA',5,3,'2022-11-17 23:01:15','2022-11-17 23:01:15'),(52,'Medias violeta',15,5000,10,'Asi podes contener las canilleras',4,2,'2022-11-17 23:14:53','2022-11-17 23:14:53'),(53,'Medias blancas y celeste',18,5000,5,'Para contener las canilleras pero en version blanca',4,3,'2022-11-17 23:15:34','2022-11-17 23:15:34'),(54,'Short Seleccion',19,7000,5,'Un short re fachero de la seleccion',4,2,'2022-11-17 23:17:10','2022-11-17 23:17:10'),(55,'Short Seleccion',17,6000,10,'Un short re fachero de la seleccion',5,2,'2022-11-17 23:17:55','2022-11-17 23:17:55'),(56,'Maquillaje Stick',20,1200,10,'Maquillaje rapido en una sola pasada',1,4,'2022-11-18 00:21:44','2022-11-18 00:29:38'),(57,'Bubuzela',50,1200,5,'Para ensordecer a tus vecinos en pleno mundial',1,4,'2022-11-18 00:22:28','2022-11-18 00:29:59'),(58,'Maraca Seleccion x2',40,250,0,'La famosa maraca que fue nuestra prueba en todo el proyecto.-',1,4,'2022-11-18 00:23:11','2022-11-18 00:29:03'),(59,'Album Mundial Oficial',17,2000,10,'Para dejar el sueldo en figuritas.',2,4,'2022-11-18 00:24:03','2022-11-18 00:28:33'),(60,'Fixture',99,200,0,'Predeciremos los partidos futuros?',2,4,'2022-11-18 00:24:57','2022-11-18 00:27:52'),(61,'Figuritas',99,150,0,'Tendras suerte y encontraras a Messi?',2,4,'2022-11-18 00:34:00','2022-11-18 00:34:00'),(62,'Album + figuritas',25,5000,0,'Album mas figuritas, tendras la suerte de encontrar a Messi?',2,4,'2022-11-18 00:38:47','2022-11-18 00:38:47');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2022-10-21 19:51:37','2022-10-21 19:51:37'),(2,'Usuario','2022-10-21 19:51:37','2022-10-21 19:51:37');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20221008041627-create-categorias.js'),('20221008041826-create-sub-categorias.js'),('20221008042323-create-roles.js'),('20221008042627-create-usuarios.js'),('20221008043305-create-productos.js'),('20221008043653-create-historiales.js'),('20221008043935-create-imagenes.js'),('20221008043947-create-historiales-imagenes.js'),('20221008044055-create-carritos.js'),('20221008044249-create-ordenes.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategorias`
--

DROP TABLE IF EXISTS `subcategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subcategorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategorias`
--

LOCK TABLES `subcategorias` WRITE;
/*!40000 ALTER TABLE `subcategorias` DISABLE KEYS */;
INSERT INTO `subcategorias` VALUES (1,'Camisetas','2022-10-21 19:51:37','2022-10-21 19:51:37'),(2,'Pantalones','2022-10-21 19:51:37','2022-10-21 19:51:37'),(3,'Accesorios','2022-10-21 19:51:37','2022-10-21 19:51:37'),(4,NULL,'2022-10-21 19:51:37','2022-10-21 19:51:37');
/*!40000 ALTER TABLE `subcategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `codPost` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `rolId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Patricio','Cristaldo',10472576,1173686874,'Av. de los Patos 123','San Miguel','Buenos Aires',1234,'patricio_cristaldo@outlook.com','$2a$10$lkYvS81ly9TQqkLIH56y0OZcxzl9WtZLN6xoFlX9tt4FMZ4ePvWtu','profile2.jpg',1,'2022-11-11 17:23:29','2022-11-11 17:23:29'),(2,'Mariana Soledad','Blanez',39112233,1132133561,'Av. de los michis 666','San Miguel','Buenos Aires',1234,'Marianablanez@gmail.com','$2a$10$efq8vtkTJu1nhAtqA1BXnetRKvri8qAYojlx4D4e.30Fz/ESEX5Te','profile4.jpg',1,'2022-11-11 17:19:59','2022-11-11 17:19:59'),(3,'Roxana','Romaniello',35667787,1144663322,'Av. del campo 123','Cordoba','Cordoba',1234,'romaniello@gmail.com','$2a$10$P7mHrGKiTjIHuGWcXhJ8/eVphxJDZH5afnFTKZwyzyd5af9boUfd.','profile3.jpg',1,'2022-11-11 17:24:19','2022-11-11 17:24:19'),(4,'Cristian','Ramirez',36848577,1122334455,'Nos abandono 123','CABA','Buenos Aires',1454,'CristianRamirez@gmail.com','$2a$10$VSuc8RCwZo78kkQkMY/BGO6hrpTFM1tv4ECfLn1gmrOsII5fdqYlS','profile1.jpg',2,'2022-11-11 17:24:50','2022-11-11 17:24:50'),(5,'Cristian','Elias',40599588,1155667788,'Vinos 444','Guaymallen','Mendoza',2667,'comision17@hotmail.com','$2a$10$OM/qqvzFdgypE3dK5oSnL.nimk1/Rzml1.pS0MdG/gdfVXIoMtyEW','profile5.jpg',2,'2022-11-11 17:25:33','2022-11-11 17:25:33'),(6,'Jeanette','Garcia Barrera',36485755,1103034567,'Av. corrientes 222','CABA','Buenos Aires',1454,'comision17@gmail.com','$2a$10$7Fr3Q8sKQBKl4i2IZBqhjedgE2FaXTgVtT71JilAJOxo0TRkWZWr.','profile6.jpg',2,'2022-11-11 17:26:05','2022-11-11 17:26:05');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-25 18:09:47
