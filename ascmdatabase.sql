-- phpMyAdmin SQL Dump
-- version 5.0.4deb2+deb11u1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-11-2022 a las 10:47:00
-- Versión del servidor: 10.5.15-MariaDB-0+deb11u1
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ascmdatabase`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ascmArboles`
--

CREATE TABLE `ascmArboles` (
  `ascmArbolesId` int(5) NOT NULL,
  `ascmMunicipiosId` int(5) NOT NULL,
  `nombre` varchar(75) NOT NULL,
  `nombre_cientifico` varchar(75) NOT NULL,
  `numero` int(5) DEFAULT NULL,
  `imagen` varchar(250) NOT NULL,
  `imagen_fecha` date DEFAULT NULL,
  `descripcion` text NOT NULL,
  `descripcion_acceso` text NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `altura` float DEFAULT NULL,
  `diametro_copa` float DEFAULT NULL,
  `perimetro_tronco` float DEFAULT NULL,
  `edad` float DEFAULT NULL,
  `altitud` float DEFAULT NULL,
  `latitud` varchar(50) NOT NULL,
  `longitud` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ascmArboles`
--

INSERT INTO `ascmArboles` (`ascmArbolesId`, `ascmMunicipiosId`, `nombre`, `nombre_cientifico`, `numero`, `imagen`, `imagen_fecha`, `descripcion`, `descripcion_acceso`, `estado`, `altura`, `diametro_copa`, `perimetro_tronco`, `edad`, `altitud`, `latitud`, `longitud`) VALUES
(49, 1, 'Alcornoque de Romanillos I', 'Quercus suber', 203, 'alcornoque-de-romanillos-i-image.jpg', '2018-04-20', 'Robusto, de copa amplia con el tronco y ramas revestidas por una corteza suberosa, gruesa, grisácea y agrietada. \r\n\r\nPresenta ramitas tomentosas de color cenicienta-rojizo, yemas también tomentosas, de forma ovoide y hojas ovales persistentes, coriáceas, generalmente puntiagudas, de coloración verde oscura por el haz y gris tomentosa por el envés. \r\n\r\nLas flores masculinas se disponen en \"espigas\" colgantes que forman manojos de 5-6. Las flores femeninas, de forma esférica, pueden disponerse aisladas o en pequeños grupos. El fruto (la bellota) es de color castaño rojizo en la madurez, con una cúpula acampanada que presenta las escamas inferiores triangulares, terminadas en punta libre.', 'Sin acceso, en una finca particular.\r\n\r\nDesde julio del 2.017 una sentencia prohíbe el acceso a la finca, tanto para vehículos motorizados, como bicicletas o caminantes.', 1, 16, 20, 3.5, 350, 595, '40.432689432002', '-3.9515543821378'),
(50, 1, 'Alcornoque de Romanillos II', 'Quercus suber', 204, 'alcornoque-de-romanillos-ii-image.jpg', '2018-04-20', 'Robusto, de copa amplia con el tronco y ramas revestidas por una corteza suberosa, gruesa, grisácea y agrietada. \r\n\r\nPresenta ramitas tomentosas de color cenicienta-rojizo, yemas también tomentosas, de forma ovoide y hojas ovales persistentes, coriáceas, generalmente puntiagudas, de coloración verde oscura por el haz y gris tomentosa por el envés. \r\n\r\nLas flores masculinas se disponen en \"espigas\" colgantes que forman manojos de 5-6. Las flores femeninas, de forma esférica, pueden disponerse aisladas o en pequeños grupos. El fruto (la bellota) es de color castaño rojizo en la madurez, con una cúpula acampanada que presenta las escamas inferiores triangulares, terminadas en punta libre.', 'Sin acceso, en una finca particular.\r\n\r\nDesde julio del 2.017 una sentencia prohíbe el acceso a la finca, tanto para vehículos motorizados, como bicicletas o caminantes.', 1, 14, 22, 2.7, 300, 594, '40.431968219179', '-3.9516149524112'),
(51, 1, 'Pino Piñonero del Puente del Ladrillo', 'Pinus Pinea', 130, 'pino-piñonero-del-puente-del-ladrillo-image.jpg', '2018-11-05', 'Copa aparasolada. Tronco ligeramente inclinado hacia la carretera. Ramas desgajadas de antiguo y otras podadas. Recibe su nombre de un antiguo puente de ladrillo próximo a él.\r\n\r\nDesaparecido el invierno del 2018 tras un fuerte temporal de viento.', 'Desde la carretera M-513, entre el Polideportivo Municipal y el Club de las Encinas.', 0, 20, 21, 3.7, 150, 667, '40.41567087533863', '-3.863288409205775'),
(52, 1, 'Alcornoque de La Corchera', 'Quercus suber', 205, 'alcornoque-de-la-corchera-image.jpg', '2016-01-02', 'Robusto, de copa amplia, con el tronco y ramas revestidas por una corteza suberosa, gruesa, grisácea y agrietada. \r\n\r\nPresenta ramitas tomentosas de color cenicienta-rojizo, yemas también tomentosas, de forma ovoide y hojas ovales persistentes, coriáceas, generalmente puntiagudas, de coloración verde oscura por el haz y gris tomentosa por el envés. \r\n\r\nLas flores masculinas se disponen en \"espigas\" colgantes que forman manojos. Las flores femeninas, de forma esférica, pueden disponerse aisladas o en pequeños grupos. \r\n\r\nEl fruto (la bellota) es de color castaño rojizo en la madurez, con una cúpula acampanada que presenta las escamas inferiores triangulares, terminadas en punta libre.', 'Desde el Polideportivo Municipal parten varias sendas que conducen al paraje de La Corchera, a 1.170 m. del mismo, cerca de la valla de delimitación.', 1, 11, 13, 2.4, 200, 693, '40.425735867628', '-3.8593651531572'),
(53, 1, 'Sabina El Enebro', 'Juniperus thurifera', 92, 'sabina-el-enebro-image.jpg', '2016-01-02', 'Fuste limpio hasta los 6 metros. Copa amplia y clara, redondeada. Horadada por pájaros carpinteros.', 'Desde el Polideportivo Municipal tomar el camino que rodea el Club Deportivo Las Encinas, en el alto, tras 950 metros, se encuentra a la derecha del camino según el sentido de la marcha.', 1, 12, 10, 1.4, 220, 709, '40.42421073553786', '-3.8655805301449373'),
(54, 4, 'Alcornoque de Prado Guerrero', 'Quercus suber', 264, 'alcornoque-de-prado-guerrero-image.jpg', '2021-04-28', 'Sin datos.', 'En el km 52.8 de la carretera M-607, sale una Vía Pecuaria hacia el oeste, que inmediatamente se abandona por la izquierda. El ejemplar está 250m más adelante, dentro de una finca privada.', 1, NULL, NULL, NULL, NULL, 1035, '40.715538740194056', '-3.968913021196863'),
(55, 5, 'Taray del Gallo', 'Tamarix gallica', 326, 'taray-del-gallo-image.png', '2019-10-31', 'Los tarays son árboles adaptados a vivir cerca de los ríos o en sitios con agua cercana, pero principalmente en zonas salinas. \r\n\r\nLos tarays consiguen absorber la sal de las capas del suelo, acumulándola en su follaje, consiguiendo vivir en lugares donde otras plantas no pueden. Sus hojas son pequeñas y escamiformes y en primavera el árbol florece dando unas flores blancas y rosa pálido.\r\n\r\nEste árbol se encuentra muy próximo a un río y se supone que toda la zona estuvo antiguamente poblada de ejemplares de la misma especie, junto con otras plantas adaptadas a vivir en las mismas condiciones. \r\n\r\nCon el paso del tiempo y la degradación producida por la presencia del ser humano, los tarays fueron desapareciendo poco a poco.', 'Se puede encontrar en la ribera septentrional del río Henares, en la Finca `El Encín`, en Alcalá de Henares, un centro agropecuario de investigación gestionado por el IMIDRA.', 1, 11.5, NULL, 2.3, 120, 605, '40.521922', '-3.291493'),
(56, 6, 'Quejigo del Robledal', 'Quercus faginea', 315, 'quejigo-del-robledal-image.jpg', '2021-04-12', 'Árbol que puede alcanzar los 20-25 m, de hojas simples, alternas y caducas, pero con la característica de que algunas de ellas permanecen secas sobre la planta hasta que al año siguiente el brote de las hojas nuevas las hace caer; es lo que se llama marcescencia. \r\n\r\nLos quejigos pueden llegar a vivir varios siglos, habiéndose encontrado ejemplares de más de mil años. \r\n\r\nLas flores nacen en primavera agrupadas en ramillos colgantes de color amarillo-ocre, y sus frutos son bellotas que suelen ser amargas.', 'Del kilómetro 32.430 de la M-229 parte un pista hacia el noroeste, 160 metros más adelante, encontramos el ejemplar en un cruce de caminos.', 1, 20, NULL, 2.98, 200, 518, '40.24624520689048', '-3.128926460830284'),
(57, 7, 'Alcornoque de la Dehesa de la Jara', 'Quercus suber', 263, 'alcornoque-de-la-dehesa-de-la-jara-image.jpg', '2016-02-22', 'Se encuentra ubicado en terreno municipal , y ha sido utilizado como recurso ganadero e industrial dado sus características y calidad para la extracción de corcho. \r\n\r\nForma parte de una de las señas de identidad de Collado Mediano y de toda la Sierra de Guadarrama, y ha sido protagonista de innumerables leyendas y cuentos populares.\r\n\r\nEn la Comunidad de Madrid es una especie escasa, suelen aparecer aislados a pie de sierra o formando pequeños grupos.', 'En la Calle de la Jara 25 hay una cancha de baloncesto, en la valla de piedra hay una pequeña portezuela que da acceso a la dehesa. A la derecha, a 100 metros, se encuentra el alcornoque.', 1, 10, 16, 3.7, 300, 992, '40.68890662421675', '-4.0441061190556225'),
(58, 7, 'Castaño de Indias de Collado Mediano', 'Aesculus hippocastanum', 271, 'castaño-de-indias-de-collado-mediano-image.jpg', '2016-02-22', 'Es una especie introducida que se la conoce como Castaño de Indias debido al parecido de sus frutos con el castaño autóctono y porque se pensaba que procedía de la India. \r\n\r\nEs una especie que no es demasiado longeva y existen pocos árboles que logren superar los 300 años de edad.\r\n\r\nGracias a su rápido crecimiento y al tamaño que alcanza su copa, es un árbol con gran valor en ciudades ya que sus hojas fijan una gran cantidad de contaminantes y CO2.', 'En frente de la Casa de la Cultura, en la confluencia de la Av. de Buenos Aires y la Calle Real. Se encuentra en un jardín privado, pero es perfectamente visible. Da sombra a un aparcamiento público.', 1, 21, NULL, 3.65, NULL, 1017, '40.69355001369074', '-4.023167095081006');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ascmMunicipios`
--

CREATE TABLE `ascmMunicipios` (
  `ascmMunicipiosId` int(5) NOT NULL,
  `municipio` varchar(50) NOT NULL,
  `provincia` varchar(50) NOT NULL,
  `comunidad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ascmMunicipios`
--

INSERT INTO `ascmMunicipios` (`ascmMunicipiosId`, `municipio`, `provincia`, `comunidad`) VALUES
(1, 'Boadilla del Monte', 'Madrid', 'Madrid'),
(2, 'Las Rozas', 'Madrid', 'Madrid'),
(3, 'Villaviciosa de Odón', 'Madrid', 'Madrid'),
(4, 'Becerril de la Sierra', 'Madrid', 'Madrid'),
(5, 'Alcalá de Henares', 'Madrid', 'Madrid'),
(6, 'Brea de Tajo', 'Madrid', 'Madrid'),
(7, 'Collado Mediano', 'Madrid', 'Madrid');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ascmArboles`
--
ALTER TABLE `ascmArboles`
  ADD PRIMARY KEY (`ascmArbolesId`),
  ADD KEY `ascmMunicipiosId` (`ascmMunicipiosId`);

--
-- Indices de la tabla `ascmMunicipios`
--
ALTER TABLE `ascmMunicipios`
  ADD PRIMARY KEY (`ascmMunicipiosId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ascmArboles`
--
ALTER TABLE `ascmArboles`
  MODIFY `ascmArbolesId` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `ascmMunicipios`
--
ALTER TABLE `ascmMunicipios`
  MODIFY `ascmMunicipiosId` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ascmArboles`
--
ALTER TABLE `ascmArboles`
  ADD CONSTRAINT `ascmArboles_ibfk_1` FOREIGN KEY (`ascmMunicipiosId`) REFERENCES `ascmMunicipios` (`ascmMunicipiosId`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
