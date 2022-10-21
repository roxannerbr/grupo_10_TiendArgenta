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
-- Dumping data for table `carritos`
--

LOCK TABLES `carritos` WRITE;
/*!40000 ALTER TABLE `carritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Cotillon','2022-10-11 20:52:40','2022-10-11 20:52:40'),(2,'Coleccionables','2022-10-11 20:52:40','2022-10-11 20:52:40'),(3,'Mujer','2022-10-11 20:52:40','2022-10-11 20:52:40'),(4,'Hombre','2022-10-11 20:52:40','2022-10-11 20:52:40'),(5,'Infantil','2022-10-11 20:52:40','2022-10-11 20:52:40');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `historiales`
--

LOCK TABLES `historiales` WRITE;
/*!40000 ALTER TABLE `historiales` DISABLE KEYS */;
/*!40000 ALTER TABLE `historiales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `historialesimagenes`
--

LOCK TABLES `historialesimagenes` WRITE;
/*!40000 ALTER TABLE `historialesimagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `historialesimagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'Kit-Clasico.png',1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(2,'Kit-Glitter.png',2,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(3,'Kit-Hincha.png',3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(4,'Kit-Globos.png',4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(5,'Combo-Fan.png',5,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(6,'Combo-Gorros.png',6,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(7,'Combo-Parejas.png',7,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(8,'Combo-Vinchas.png',8,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(9,'Col-Aguero.png',9,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(10,'Col-Messi.png',10,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(11,'Col-CopaMundial.png',11,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(12,'Col-Pelota.png',12,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(13,'Col-Mascota.png',13,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(14,'Col-Funkopop.png',14,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(15,'Col-titular.png',15,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(16,'Col-alternativa.png',16,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(17,'Inf-vasoTermico.png',17,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(18,'Inf-manta.png',18,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(19,'Inf-perfume.png',19,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(20,'Inf-botella.png',20,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(21,'Inf-Messi.png',21,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(22,'Inf-Titular.png',22,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(23,'Inf-alternativa.png',23,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(24,'Inf-pantalon.png',24,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(25,'M-titular.png',25,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(26,'M-Alternativa.png',26,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(27,'M-Medias.png',27,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(28,'M-copaamerica.png',28,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(29,'M-shortblanco.png',29,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(30,'M-pantalon.png',30,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(31,'H-Medias.png',31,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(32,'H-pantalon.png',32,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(33,'H-titular.png',33,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(34,'H-messi.png',34,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(35,'H-shortblanco.png',35,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(36,'H-shortnegro.png',36,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(37,'H-AlterLarga.png',37,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(38,'H-Alter.png',38,'2022-10-11 20:52:42','2022-10-11 20:52:42');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Maquillaje clasico ',15,750,5,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(2,'Maquillaje glitter',15,800,5,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(3,'Kit Hincha',5,8500,0,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(4,'Kit Globos',10,2800,15,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(5,'Combo Fan',20,5000,10,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(6,'Combo Gorros x6',13,6500,15,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(7,'Combo Pareja',20,1500,0,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(8,'Combo Vinchas',25,1500,5,'lorem ipsum',1,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(9,'Aguero Miniatura',2,700,0,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(10,'Messi Cabezon 3D',25,1500,5,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(11,'Copa del Mundo 3D',25,2500,10,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(12,'Pelota Qatar \'22',15,45500,10,'Pelota N°5 OFICIAL Competición MUNDIAL - 2022',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(13,'Mascota Mundial \'22',5,4000,5,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(14,'Funko Pop Messi',2,3800,10,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(15,'Camiseta Edicion Especial Titular',25,1500,5,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(16,'Camiseta Edicion Especial Alternativa',25,1500,5,'lorem ipsum',2,4,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(17,'Vaso Termico Seleccion',25,700,5,'Para que tengas el mate cocido siempre caliente. Pico vertedor. Capacidad 500ml',5,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(18,'Manta Luminosa',12,7500,10,'Manta Fluorecente Seleccion Argenntina - AFA, para que encuentres la cama en las noches sin luz.',5,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(19,'Perfume Cancha',12,700,30,'Fragancia a choripan',5,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(20,'Botella Reutilizable',25,500,0,'botella reutilizable de Polipropileno bpa free capacidad 700cc',5,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(21,'Camiseta Titular Messi',5,18000,0,'Una camiseta de la Selección Argentina con la estampa de Messi, hecha con material reciclado',5,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(22,'Camiseta Titular Seleccion',10,15000,0,'100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY.',5,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(23,'Camiseta Alternativa Seleccion',20,15000,30,'Presentamos la nueva Camiseta Infantil Adidas Alternativa de Juego de la Selección Argentina para la temporada 2019/2020',5,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(24,'Pantalon Presentacion',20,14000,30,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',5,2,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(25,'Camiseta Titular',20,15000,0,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',3,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(26,'Camiseta Alternativa Mujer',5,15000,30,'Dedicada a la tierra que nos hace soñar. El kit de visitante de Argentina es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país.',3,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(27,'Medias Mujer',10,3500,0,'Siempre Argentina hasta los pies. Estas medias de fútbol adidas lucen los clásicos colores del uniforme de la selección y ofrecen amortiguación localizada y soporte en el arco.',3,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(28,'Camiseta Copa America',10,10000,10,'Las camisetas viejitas, pero mas baratas. Camiseta Celeste Adidas Seleccion Argentina - Copa America 2021',3,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(29,'Short Seleccion Blanco',10,3000,10,'u short',3,2,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(30,'Pantalon Presentacion',5,14000,30,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',3,2,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(31,'Medias Blancas',10,4000,10,'Siempre Argentina hasta los pies. Estas medias de fútbol adidas lucen los clásicos colores del uniforme de la selección y ofrecen amortiguación localizada y soporte en el arco.',4,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(32,'Pantalon Presentacion',20,14000,30,'Todos somos uno cuando juega la selección. Los jugadores de la selección Argentina usan una versión de este pantalón de fútbol para jóvenes en sus apariciones en público. ',4,3,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(33,'Camiseta Titular',20,17000,10,'100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY.',4,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(34,'Camiseta Titular Messi',20,19000,10,'Una camiseta de la Selección Argentina con la estampa de Messi, hecha con material reciclado',4,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(35,'Short Seleccion Blanco',5,10000,10,'Luciendo el clásico color blanco, este short de fútbol adidas de la Selección Argentina sigue el ejemplo de la camiseta a la que acompañan. Creado para mantener cómodo al hincha, están hechos de tejido suave y cuentan con tecnología de absorción AEROREADY',4,2,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(36,'Short Seleccion',6,10000,10,'',4,2,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(37,'Alternativa Manga Larga',9,23000,30,'Para que no tengas frio en invierno',4,1,'2022-10-11 20:52:42','2022-10-11 20:52:42'),(38,'Camiseta Alternativa Hombre  ',13,17000,30,'Para que no tengas frio en invierno',4,1,'2022-10-11 20:52:42','2022-10-11 20:52:42');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','2022-10-11 20:52:41','2022-10-11 20:52:41'),(2,'Usuario','2022-10-11 20:52:41','2022-10-11 20:52:41');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20221008041627-create-categorias.js'),('20221008041826-create-sub-categorias.js'),('20221008042323-create-roles.js'),('20221008042627-create-usuarios.js'),('20221008043305-create-productos.js'),('20221008043653-create-historiales.js'),('20221008043935-create-imagenes.js'),('20221008043947-create-historiales-imagenes.js'),('20221008044055-create-carritos.js'),('20221008044249-create-ordenes.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `subcategorias`
--

LOCK TABLES `subcategorias` WRITE;
/*!40000 ALTER TABLE `subcategorias` DISABLE KEYS */;
INSERT INTO `subcategorias` VALUES (1,'Camisetas','2022-10-11 20:52:41','2022-10-11 20:52:41'),(2,'Pantalones','2022-10-11 20:52:41','2022-10-11 20:52:41'),(3,'Accesorios','2022-10-11 20:52:41','2022-10-11 20:52:41'),(4,NULL,'2022-10-11 20:52:41','2022-10-11 20:52:41');
/*!40000 ALTER TABLE `subcategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'roxana','roman',35667787,1144663322,'romaniello@gmail.com','$2a$10$F0tPvJyEredWP1/94GN0xepXC.pHfJAWZbEuX2VXvPau6mEh5yawO','profile3.jpg',1,'2022-10-11 20:52:41','2022-10-11 20:52:41'),(2,'Mariana Soledad','Blanez',39112233,1132133561,'Marianablanez@gmail.com','$2a$10$qq1bHOscBbYrK.dpBYIAn.NN0SfPCUcilX5srz6DdSbYaKoB0cM7.','profile4.jpg',1,'2022-10-11 20:52:41','2022-10-11 20:52:41'),(3,'Cristian','Ramirez',36848577,1122334455,'CristianRamirez@gmail.com','$2a$10$2Z601Z3tdhsHEBJsy282X.VLhBCN6MyK86QHZNdw6oO2c3Rpg7ib6','profile1.jpg',1,'2022-10-11 20:52:41','2022-10-11 20:52:41'),(4,'Cristian','Elias',40599588,1155667788,'comision17@hotmail.com','$2a$10$BqJD/fPxEOKSgnCBNe2ua.q.uiJ4IzxVKOcu72jEs08gktMxWdjbG','profile5.jpg',2,'2022-10-11 20:52:41','2022-10-11 20:52:41'),(5,'Jeanette','Garcia Barrera',36485755,1103034567,'comision17@gmail.com','$2a$10$NYe9Jm2.02Rz.C4IB.YUx.BMzJtqXRJoPWFbOurn0InkHhRTwhRru','profile6.jpg',2,'2022-10-11 20:52:41','2022-10-11 20:52:41'),(6,'Patricio','Cristaldo',10472576,1173686874,'patricio_cristaldo@outlook.com','$2a$10$8jzunmBWDZvfOcWCxs9SruiYpXq7IM1CIJtME5s1CnqC6/CekQTzO','profile2.jpg',1,'2022-10-11 20:52:41','2022-10-11 20:52:41');
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

-- Dump completed on 2022-10-12 21:39:02
