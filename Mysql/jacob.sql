-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2022 a las 01:55:50
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jacob`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `codiacti` int(11) NOT NULL,
  `coditema` int(11) NOT NULL,
  `texto` varchar(1000) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `fechdigi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco_preguntas`
--

CREATE TABLE `banco_preguntas` (
  `CodBanc` int(11) NOT NULL,
  `Materia` varchar(100) COLLATE utf8_bin NOT NULL,
  `Tema` varchar(100) COLLATE utf8_bin NOT NULL,
  `Subtema` varchar(100) COLLATE utf8_bin NOT NULL,
  `Enunciado` varchar(5000) COLLATE utf8_bin NOT NULL,
  `Explicacion` varchar(5000) COLLATE utf8_bin NOT NULL,
  `Opciones` varchar(5000) COLLATE utf8_bin NOT NULL,
  `Respuesta` varchar(1000) COLLATE utf8_bin NOT NULL,
  `Tiempo` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `banco_preguntas`
--

INSERT INTO `banco_preguntas` (`CodBanc`, `Materia`, `Tema`, `Subtema`, `Enunciado`, `Explicacion`, `Opciones`, `Respuesta`, `Tiempo`) VALUES
(1, 'Microeconomía', 'Estadística Mod', 'Lección 1', 'Enunciado 1', 'Explicación 1', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 4', 1),
(2, 'Microeconomía', 'Matemáticas', 'Leccion 2', 'Enunciado de la pregunta', 'La opción es 3 porque...', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 3', 5),
(3, 'Fundamentos de Matemáticas', 'Modulo 1', 'Leccion 1', 'Enunciado pregunta 1', 'Explicacion pregunta 1', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 3', 1.5),
(4, 'Fundamentos de Matemáticas', 'Modulo 1', 'Leccion 1A', 'Enunciado pregunta 1A', 'Explicación pregunta 1A', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 2', 1),
(5, 'Fundamentos de Matemáticas', 'Modulo 2', 'Leccion 2', 'Enunciado pregunta 2', 'Explicación pregunta 2', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 4', 0.5),
(6, 'Fundamentos de Matemáticas', 'Modulo 3', 'Leccion 3A', 'Enunciado pregunta 3A', 'Explicación pregunta 3A', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 1', 0.8),
(7, 'Fundamentos de Matemáticas', 'Modulo 3', 'Leccion 3', 'Enunciado Pregunta 3', 'Explicación pregunta 3', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', 'Opción 2', 1),
(8, 'Fundamentos de Matemáticas', 'Modulo 3', 'Leccion 3', 'Enunciado', 'Exp', '1</p>2</p>3</p>4', '3', 1),
(15, 'Introducción a la economía', 'Modulo 1', 'Leccion 1', 'Enunciado 1.0', 'Explicación 1.0', '1</p>2</p>3</p>4', '3', 5),
(23, 'Introducción a la economía', 'Modulo 1', 'Leccion 1', 'Enunciado 1.1', 'Explicación 1.1', '1</p>2</p>3</p>4', '4', 5),
(24, 'Introducción a la economía', 'Modulo 1', 'Leccion 2', 'Enunciado 1.2', 'Explicación 1.2', '1</p>2</p>3</p>4', '1', 3),
(25, 'Introducción a la economía', 'Modulo 1', 'Leccion 2', 'Enunciado 1.3', 'Explicación 1.3', '1</p>2</p>3</p>4', '2', 5),
(26, 'Introducción a la economía', 'Modulo 1', 'Leccion 2', 'Enunciado 1.4', 'Explicación 1.4', '1</p>2</p>3</p>4', '1', 5),
(27, 'Introducción a la economía', 'Modulo 2', 'Leccion 2.1', 'Enunciado 2.0', 'Explicación 2.0', '1</p>2</p>3</p>4', '3', 4),
(28, 'Introducción a la economía', 'Modulo 2', 'Leccion 2.1', 'Enunciado 2.1', 'Exp', '1</p>2</p>3</p>4', '3', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carreras`
--

CREATE TABLE `carreras` (
  `CodiCarr` int(11) NOT NULL,
  `NombCarr` varchar(150) NOT NULL,
  `NumeSeme` int(11) NOT NULL,
  `TipoCarr` int(11) NOT NULL,
  `Usuadigi` int(11) NOT NULL,
  `fechdigi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `Codigo` int(20) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `Tipo` varchar(100) COLLATE utf8_bin NOT NULL,
  `Modalidad` varchar(100) COLLATE utf8_bin NOT NULL,
  `NumSemestres` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`Codigo`, `Nombre`, `Tipo`, `Modalidad`, `NumSemestres`) VALUES
(1, 'Derecho', '', '', 10),
(2, 'Contaduría pública', '', '', 10),
(3, 'Administración de Empresas', '', '', 10),
(4, 'Ingeniería', '', '', 10),
(6, 'Humanidades', 'profesional', 'Presencial', 10),
(8, 'Categoria de prueba', '', '', 0),
(9, 'Categoria 2', '', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `CodiCurs` int(11) NOT NULL,
  `NombCurs` varchar(500) COLLATE utf8_bin NOT NULL,
  `Categoria` varchar(100) COLLATE utf8_bin NOT NULL,
  `Precio` varchar(50) COLLATE utf8_bin NOT NULL,
  `Informacion` varchar(1000) COLLATE utf8_bin NOT NULL,
  `Descripcion` varchar(1000) COLLATE utf8_bin NOT NULL,
  `img` varchar(200) COLLATE utf8_bin NOT NULL,
  `Fecha` date DEFAULT NULL,
  `estado` int(11) NOT NULL DEFAULT 1,
  `idDocente` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`CodiCurs`, `NombCurs`, `Categoria`, `Precio`, `Informacion`, `Descripcion`, `img`, `Fecha`, `estado`, `idDocente`) VALUES
(1, 'Normatividad COVID - 19', 'Contaduría pública', '300000', 'Información Curso', 'Descripción Normatividad COVID-19', 'pandemia.jpg', '2022-02-21', 1, 0),
(2, 'Litigación Oral', 'Contaduría pública', '250000 ', 'Información Curso', 'Descripción Litigación Oral', 'litigacionOral.jpg', '2022-02-21', 1, 0),
(3, 'Conciliación y Arbitraje', 'Derecho', '500000', 'Información Curso', 'Descripción Conciliación y Arbitraje', 'conciliacion.jpg', '2022-02-21', 1, 0),
(5, 'Curso de Prueba', 'Derecho', '500000', 'Información', 'Acerca del curso', 'imagen.jpg', '2022-03-02', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamento`
--

CREATE TABLE `departamento` (
  `cod_dep` int(11) NOT NULL,
  `nom_dep` varchar(500) NOT NULL,
  `cod_pai` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departamento`
--

INSERT INTO `departamento` (`cod_dep`, `nom_dep`, `cod_pai`) VALUES
(2, 'Amazonas', 'CO'),
(3, 'Antioquía', 'CO'),
(4, 'Arauca', 'CO'),
(5, 'Atlántico', 'CO'),
(6, 'Bolívar', 'CO'),
(7, 'Boyacá', 'CO'),
(8, 'Caldas', 'CO'),
(9, 'Caquetá', 'CO'),
(10, 'Casanare', 'CO'),
(11, 'Cauca', 'CO'),
(12, 'Cesar', 'CO'),
(13, 'Chocó', 'CO'),
(14, 'Córdoba', 'CO'),
(15, 'Cundinamarca', 'CO'),
(16, 'Guainía', 'CO'),
(17, 'Guaviare', 'CO'),
(18, 'Huila', 'CO'),
(19, 'La Guajira', 'CO'),
(20, 'Magdalena', 'CO'),
(21, 'Meta', 'CO'),
(22, 'Nariño', 'CO'),
(23, 'Norte de Santander', 'CO'),
(24, 'Putumayo', 'CO'),
(25, 'Quindío', 'CO'),
(26, 'Risaralda', 'CO'),
(27, 'San Andrés y Providencia', 'CO'),
(28, 'Santander', 'CO'),
(29, 'Sucre', 'CO'),
(30, 'Tolima', 'CO'),
(31, 'Valle del Cauca', 'CO'),
(32, 'Vaupés', 'CO'),
(33, 'Vichada', 'CO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evaluacion`
--

CREATE TABLE `evaluacion` (
  `codieval` int(11) NOT NULL,
  `codiacti` int(11) NOT NULL,
  `pregunta` varchar(300) NOT NULL,
  `tipopreg` int(11) NOT NULL,
  `respcorr` int(11) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `codiforo` int(11) NOT NULL,
  `codiunid` int(11) NOT NULL,
  `tipoforo` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `fechcrea` int(11) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `tema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foroparticipante`
--

CREATE TABLE `foroparticipante` (
  `codiforo` int(11) NOT NULL,
  `codiusua` int(11) NOT NULL,
  `participacion` int(11) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `fechdigi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insccarr`
--

CREATE TABLE `insccarr` (
  `CodiInsc` int(11) NOT NULL,
  `CodiUsua` int(11) NOT NULL,
  `CodiCarr` int(11) NOT NULL,
  `FechInsc` date NOT NULL,
  `FechFin` date NOT NULL,
  `SemeMatr` int(11) NOT NULL,
  `TipoInsc` int(11) NOT NULL,
  `EstaInsc` int(11) NOT NULL,
  `UsuaDigi` int(11) NOT NULL,
  `FechDigi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insccurs`
--

CREATE TABLE `insccurs` (
  `CodiInsc` int(11) NOT NULL,
  `CodiCurs` int(11) NOT NULL,
  `CodiEstu` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `Progreso` varchar(5) COLLATE utf8_bin NOT NULL DEFAULT '0',
  `evaluacion` float NOT NULL DEFAULT -1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `insccurs`
--

INSERT INTO `insccurs` (`CodiInsc`, `CodiCurs`, `CodiEstu`, `estado`, `Progreso`, `evaluacion`) VALUES
(3, 1, 5, 0, '0', -1),
(16, 1, 6, 0, '0', -1),
(17, 1, 6, 0, '0', -1),
(20, 2, 42, -1, '0', -1),
(23, 1, 41, -1, '100.0', 2.14286),
(25, 2, 41, 0, '0', -1),
(26, 3, 41, 0, '0', -1),
(31, 1, 12, 1, '100.0', 2.85714);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscmat`
--

CREATE TABLE `inscmat` (
  `CodiInsc` int(11) NOT NULL,
  `CodiEstu` int(11) NOT NULL,
  `CodiCurs` int(11) NOT NULL,
  `Semestre` int(20) NOT NULL,
  `Programa` varchar(200) COLLATE utf8_bin NOT NULL,
  `estado` int(11) NOT NULL,
  `Progreso` varchar(11) COLLATE utf8_bin NOT NULL DEFAULT '-2',
  `evaluacion` float NOT NULL DEFAULT -1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `inscmat`
--

INSERT INTO `inscmat` (`CodiInsc`, `CodiEstu`, `CodiCurs`, `Semestre`, `Programa`, `estado`, `Progreso`, `evaluacion`) VALUES
(1, 12, 1, 2, 'Contaduría pública', 1, '100.0', -1),
(2, 12, 3, 1, 'Contaduría pública', 4, '-2', -1),
(3, 12, 4, 1, 'Contaduría pública', 4, '-2', -1),
(4, 12, 5, 2, 'Contaduría pública', 1, '-2', -1),
(5, 12, 6, 2, 'Contaduría pública', 1, '-2', -1),
(6, 12, 7, 2, 'Contaduría pública', 1, '-2', -1),
(7, 12, 8, 1, 'Contaduría pública', 4, '-2', -1),
(8, 12, 9, 3, 'Contaduría pública', 0, '-2', -1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `Codigo` int(11) NOT NULL,
  `Nombre` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Programa` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Semestre` int(11) NOT NULL,
  `Categoria` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Creditos` int(20) NOT NULL,
  `Prerequisito` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Descripcion` varchar(1000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `MateriaPrev` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `TemaPrev` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Sede` varchar(2000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Jornada` varchar(2000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Estado` int(20) NOT NULL DEFAULT 1,
  `Fecha` date DEFAULT NULL,
  `img` varchar(100) NOT NULL,
  `Modulos` int(11) NOT NULL,
  `idDocente` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`Codigo`, `Nombre`, `Programa`, `Semestre`, `Categoria`, `Creditos`, `Prerequisito`, `Descripcion`, `MateriaPrev`, `TemaPrev`, `Sede`, `Jornada`, `Estado`, `Fecha`, `img`, `Modulos`, `idDocente`) VALUES
(1, 'Microeconomía', 'Contaduría pública', 2, 'Teórica', 2, 'NULL', 'Prueba', 'Fundamentos de Matemáticas</p>Fundamentos de Matemáticas</p>Fundamentos de Matemáticas', 'Modulo 1</p>Modulo 2</p>Modulo 3', 'Prueba', 'Prueba', 1, NULL, 'microecono.jpg', 5, 0),
(2, 'Derecho Penal', 'Derecho', 2, 'Mixta', 4, 'NULL', 'Acerca de Derecho Penal', 'NULL', 'NULL', 'Ipiales', 'Nocturno', 1, '2021-06-11', 'derecho_Penal.jpeg', 2, 0),
(3, 'Introducción a la economía', 'Contaduría pública', 1, 'Mixta', 4, 'NULL', 'Acerca de materia', 'Microeconomía</p>Microeconomía</p>Microeconomía</p>Microeconomía', 'Matemáticas</p>Normativas</p>Mercados</p>Estadística Mod', 'Ipiales', 'Diurno', 1, '2021-10-20', 'imagen.jpg', 2, 16),
(4, 'Fundamentos de Matemáticas', 'Contaduría pública', 1, 'Teórica', 3, 'NULL', 'Acerca de', 'NULL', 'NULL', 'Ipiales', 'Diurno', 1, '2021-10-20', 'imagen.jpg', 3, 0),
(5, 'Calculo integral', 'Contaduría pública', 2, 'Teórica', 3, 'Fundamentos de Matemáticas</p>Introducción a la economía', 'Acerca de calculo integral', 'Fundamentos de Matemáticas', 'Modulo 1', 'Ipiales', 'Diurno', 1, '2021-10-20', 'imagen.jpg', 2, 0),
(6, 'Derecho Comercial', 'Contaduría pública', 2, 'Teórica', 3, 'Derecho constitucional', 'Acerca de', 'Introducción a la economía', 'MODULO 1', 'Ipiales', 'Diurno', 1, '2021-10-20', 'imagen.jpg', 2, 0),
(7, 'Planeacion Empresarial', 'Contaduría pública', 2, 'Teórica', 3, 'Introducción a la economía', 'Acerca de', 'Introducción a la economía', 'MODULO 1', 'Ipiales', 'Diurno', 1, '2021-10-20', 'imagen.jpg', 1, 0),
(8, 'Derecho constitucional', 'Contaduría pública', 1, 'Teórica', 1, 'NULL', 'Acerca de', 'NULL', 'NULL', 'Ipiales', 'Diurno', 1, '2021-10-20', 'imagen.jpg', 2, 0),
(9, 'Macroeconomia', 'Contaduría pública', 3, 'Teórica', 2, 'Microeconomía</p>Introducción a la economía', 'Acerca de', 'Microeconomía</p>Microeconomía</p>Fundamentos de Matemáticas', 'Estadística Mod</p>Matemáticas</p>Modulo 1', 'Ipiales', 'Nocturno', 1, '2021-10-20', 'imagen.jpg', 1, 0),
(14, 'Materia Prueba', 'Contaduría pública', 3, 'Teórica', 3, 'Microeconomía</p>Derecho Comercial</p>Introducción a la economía', 'Detalles', 'Fundamentos de Matemáticas</p>Fundamentos de Matemáticas</p>Microeconomía', 'Modulo 1</p>Modulo 2</p>Matemáticas', 'Pasto', 'Diurno', 1, '2021-12-09', 'imagen.jpg', 3, 0),
(31, 'Materia Doc', 'Contaduría pública', 2, 'Teórica', 4, 'NULL', 'sdfsdf', 'NULL', 'NULL', 'Pasto', 'Diurno', 1, '2022-04-29', 'imagen.jpg', 1, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

CREATE TABLE `matricula` (
  `CodiMatr` int(11) NOT NULL,
  `CodiAno` int(11) NOT NULL,
  `CodiPeri` int(11) NOT NULL,
  `CodiInsc` int(11) NOT NULL,
  `CodiMate` int(11) NOT NULL,
  `Estado` int(11) NOT NULL,
  `CodiDoce` int(11) NOT NULL,
  `ResuDiag` int(11) NOT NULL,
  `UsuaMatr` int(11) NOT NULL,
  `FechMatr` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `cod_mun` int(11) NOT NULL,
  `nom_mun` varchar(500) NOT NULL,
  `cod_dep` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`cod_mun`, `nom_mun`, `cod_dep`) VALUES
(2, 'Medellín', 3),
(3, 'Abejorral', 3),
(4, 'Abriaquí', 3),
(5, 'Alejandría', 3),
(6, 'Amagá', 3),
(7, 'Amalfi', 3),
(8, 'Andes', 3),
(9, 'Angelópolis', 3),
(10, 'Angostura', 3),
(11, 'Anorí', 3),
(12, 'Santafé de Antioquia', 3),
(13, 'Anza', 3),
(14, 'Apartadó', 3),
(15, 'Arboletes', 3),
(16, 'Argelia', 3),
(17, 'Armenia', 3),
(18, 'Barbosa', 3),
(19, 'Belmira', 3),
(20, 'Bello', 3),
(21, 'Betania', 3),
(22, 'Betulia', 3),
(23, 'Ciudad Bolívar', 3),
(24, 'Briceño', 3),
(25, 'Buriticá', 3),
(26, 'Cáceres', 3),
(27, 'Caicedo', 3),
(28, 'Caldas', 3),
(29, 'Campamento', 3),
(30, 'Cañasgordas', 3),
(31, 'Caracolí', 3),
(32, 'Caramanta', 3),
(33, 'Carepa', 3),
(34, 'El Carmen de Viboral', 3),
(35, 'Carolina', 3),
(36, 'Caucasia', 3),
(37, 'Chigorodó', 3),
(38, 'Cisneros', 3),
(39, 'Cocorná', 3),
(40, 'Concepción', 3),
(41, 'Concordia', 3),
(42, 'Copacabana', 3),
(43, 'Dabeiba', 3),
(44, 'Don Matías', 3),
(45, 'Ebéjico', 3),
(46, 'El Bagre', 3),
(47, 'Entrerrios', 3),
(48, 'Envigado', 3),
(49, 'Fredonia', 3),
(50, 'Frontino', 3),
(51, 'Giraldo', 3),
(52, 'Girardota', 3),
(53, 'Gómez Plata', 3),
(54, 'Granada', 3),
(55, 'Guadalupe', 3),
(56, 'Guarne', 3),
(57, 'Guatapé', 3),
(58, 'Heliconia', 3),
(59, 'Hispania', 3),
(60, 'Itagui', 3),
(61, 'Ituango', 3),
(62, 'Jardín', 3),
(63, 'Jericó', 3),
(64, 'La Ceja', 3),
(65, 'La Estrella', 3),
(66, 'La Pintada', 3),
(67, 'La Unión', 3),
(68, 'Liborina', 3),
(69, 'Maceo', 3),
(70, 'Marinilla', 3),
(71, 'Montebello', 3),
(72, 'Murindó', 3),
(73, 'Mutatá', 3),
(74, 'Nariño', 3),
(75, 'Necoclí', 3),
(76, 'Nechí', 3),
(77, 'Olaya', 3),
(78, 'Peñol', 3),
(79, 'Peque', 3),
(80, 'Pueblorrico', 3),
(81, 'Puerto Berrío', 3),
(82, 'Puerto Nare', 3),
(83, 'Puerto Triunfo', 3),
(84, 'Remedios', 3),
(85, 'Retiro', 3),
(86, 'Rionegro', 3),
(87, 'Sabanalarga', 3),
(88, 'Sabaneta', 3),
(89, 'Salgar', 3),
(90, 'San Andrés de Cuerquía', 3),
(91, 'San Carlos', 3),
(92, 'San Francisco', 3),
(93, 'San Jerónimo', 3),
(94, 'San José de La Montaña', 3),
(95, 'San Juan de Urabá', 3),
(96, 'San Luis', 3),
(97, 'San Pedro', 3),
(98, 'San Pedro de Uraba', 3),
(99, 'San Rafael', 3),
(100, 'San Roque', 3),
(101, 'San Vicente', 3),
(102, 'Santa Bárbara', 3),
(103, 'Santa Rosa de Osos', 3),
(104, 'Santo Domingo', 3),
(105, 'El Santuario', 3),
(106, 'Segovia', 3),
(107, 'Sonson', 3),
(108, 'Sopetrán', 3),
(109, 'Támesis', 3),
(110, 'Tarazá', 3),
(111, 'Tarso', 3),
(112, 'Titiribí', 3),
(113, 'Toledo', 3),
(114, 'Turbo', 3),
(115, 'Uramita', 3),
(116, 'Urrao', 3),
(117, 'Valdivia', 3),
(118, 'Valparaíso', 3),
(119, 'Vegachí', 3),
(120, 'Venecia', 3),
(121, 'Vigía del Fuerte', 3),
(122, 'Yalí', 3),
(123, 'Yarumal', 3),
(124, 'Yolombó', 3),
(125, 'Yondó', 3),
(126, 'Zaragoza', 3),
(127, 'Barranquilla', 5),
(128, 'Baranoa', 5),
(129, 'Campo de La Cruz', 5),
(130, 'Candelaria', 5),
(131, 'Galapa', 5),
(132, 'Juan de Acosta', 5),
(133, 'Luruaco', 5),
(134, 'Malambo', 5),
(135, 'Manatí', 5),
(136, 'Palmar de Varela', 5),
(137, 'Piojó', 5),
(138, 'Polonuevo', 5),
(139, 'Ponedera', 5),
(140, 'Puerto Colombia', 5),
(141, 'Repelón', 5),
(142, 'Sabanagrande', 5),
(143, 'Sabanalarga', 5),
(144, 'Santa Lucía', 5),
(145, 'Santo Tomás', 5),
(146, 'Soledad', 5),
(147, 'Suan', 5),
(148, 'Tubará', 5),
(149, 'Usiacurí', 5),
(150, 'Bogotá D.C.', 15),
(151, 'Cartagena', 6),
(152, 'Achí', 6),
(153, 'Altos del Rosario', 6),
(154, 'Arenal', 6),
(155, 'Arjona', 6),
(156, 'Arroyohondo', 6),
(157, 'Barranco de Loba', 6),
(158, 'Calamar', 6),
(159, 'Cantagallo', 6),
(160, 'Cicuco', 6),
(161, 'Córdoba', 6),
(162, 'Clemencia', 6),
(163, 'El Carmen de Bolívar', 6),
(164, 'El Guamo', 6),
(165, 'El Peñón', 6),
(166, 'Hatillo de Loba', 6),
(167, 'Magangué', 6),
(168, 'Mahates', 6),
(169, 'Margarita', 6),
(170, 'María La Baja', 6),
(171, 'Montecristo', 6),
(172, 'Mompós', 6),
(173, 'Morales', 6),
(174, 'Norosí', 6),
(175, 'Pinillos', 6),
(176, 'Regidor', 6),
(177, 'Río Viejo', 6),
(178, 'San Cristóbal', 6),
(179, 'San Estanislao', 6),
(180, 'San Fernando', 6),
(181, 'San Jacinto', 6),
(182, 'San Jacinto del Cauca', 6),
(183, 'San Juan Nepomuceno', 6),
(184, 'San Martín de Loba', 6),
(185, 'San Pablo', 6),
(186, 'Santa Catalina', 6),
(187, 'Santa Rosa', 6),
(188, 'Santa Rosa del Sur', 6),
(189, 'Simití', 6),
(190, 'Soplaviento', 6),
(191, 'Talaigua Nuevo', 6),
(192, 'Tiquisio', 6),
(193, 'Turbaco', 6),
(194, 'Turbaná', 6),
(195, 'Villanueva', 6),
(196, 'Zambrano', 6),
(197, 'Tunja', 7),
(198, 'Almeida', 7),
(199, 'Aquitania', 7),
(200, 'Arcabuco', 7),
(201, 'Belén', 7),
(202, 'Berbeo', 7),
(203, 'Betéitiva', 7),
(204, 'Boavita', 7),
(205, 'Boyacá', 7),
(206, 'Briceño', 7),
(207, 'Buenavista', 7),
(208, 'Busbanzá', 7),
(209, 'Caldas', 7),
(210, 'Campohermoso', 7),
(211, 'Cerinza', 7),
(212, 'Chinavita', 7),
(213, 'Chiquinquirá', 7),
(214, 'Chiscas', 7),
(215, 'Chita', 7),
(216, 'Chitaraque', 7),
(217, 'Chivatá', 7),
(218, 'Ciénega', 7),
(219, 'Cómbita', 7),
(220, 'Coper', 7),
(221, 'Corrales', 7),
(222, 'Covarachía', 7),
(223, 'Cubará', 7),
(224, 'Cucaita', 7),
(225, 'Cuítiva', 7),
(226, 'Chíquiza', 7),
(227, 'Chivor', 7),
(228, 'Duitama', 7),
(229, 'El Cocuy', 7),
(230, 'El Espino', 7),
(231, 'Firavitoba', 7),
(232, 'Floresta', 7),
(233, 'Gachantivá', 7),
(234, 'Gameza', 7),
(235, 'Garagoa', 7),
(236, 'Guacamayas', 7),
(237, 'Guateque', 7),
(238, 'Guayatá', 7),
(239, 'Güicán', 7),
(240, 'Iza', 7),
(241, 'Jenesano', 7),
(242, 'Jericó', 7),
(243, 'Labranzagrande', 7),
(244, 'La Capilla', 7),
(245, 'La Victoria', 7),
(246, 'La Uvita', 7),
(247, 'Villa de Leyva', 7),
(248, 'Macanal', 7),
(249, 'Maripí', 7),
(250, 'Miraflores', 7),
(251, 'Mongua', 7),
(252, 'Monguí', 7),
(253, 'Moniquirá', 7),
(254, 'Motavita', 7),
(255, 'Muzo', 7),
(256, 'Nobsa', 7),
(257, 'Nuevo Colón', 7),
(258, 'Oicatá', 7),
(259, 'Otanche', 7),
(260, 'Pachavita', 7),
(261, 'Páez', 7),
(262, 'Paipa', 7),
(263, 'Pajarito', 7),
(264, 'Panqueba', 7),
(265, 'Pauna', 7),
(266, 'Paya', 7),
(267, 'Paz de Río', 7),
(268, 'Pesca', 7),
(269, 'Pisba', 7),
(270, 'Puerto Boyacá', 7),
(271, 'Quípama', 7),
(272, 'Ramiriquí', 7),
(273, 'Ráquira', 7),
(274, 'Rondón', 7),
(275, 'Saboyá', 7),
(276, 'Sáchica', 7),
(277, 'Samacá', 7),
(278, 'San Eduardo', 7),
(279, 'San José de Pare', 7),
(280, 'San Luis de Gaceno', 7),
(281, 'San Mateo', 7),
(282, 'San Miguel de Sema', 7),
(283, 'San Pablo de Borbur', 7),
(284, 'Santana', 7),
(285, 'Santa María', 7),
(286, 'Santa Rosa de Viterbo', 7),
(287, 'Santa Sofía', 7),
(288, 'Sativanorte', 7),
(289, 'Sativasur', 7),
(290, 'Siachoque', 7),
(291, 'Soatá', 7),
(292, 'Socotá', 7),
(293, 'Socha', 7),
(294, 'Sogamoso', 7),
(295, 'Somondoco', 7),
(296, 'Sora', 7),
(297, 'Sotaquirá', 7),
(298, 'Soracá', 7),
(299, 'Susacón', 7),
(300, 'Sutamarchán', 7),
(301, 'Sutatenza', 7),
(302, 'Tasco', 7),
(303, 'Tenza', 7),
(304, 'Tibaná', 7),
(305, 'Tibasosa', 7),
(306, 'Tinjacá', 7),
(307, 'Tipacoque', 7),
(308, 'Toca', 7),
(309, 'Togüí', 7),
(310, 'Tópaga', 7),
(311, 'Tota', 7),
(312, 'Tununguá', 7),
(313, 'Turmequé', 7),
(314, 'Tuta', 7),
(315, 'Tutazá', 7),
(316, 'Umbita', 7),
(317, 'Ventaquemada', 7),
(318, 'Viracachá', 7),
(319, 'Zetaquira', 7),
(320, 'Manizales', 8),
(321, 'Aguadas', 8),
(322, 'Anserma', 8),
(323, 'Aranzazu', 8),
(324, 'Belalcázar', 8),
(325, 'Chinchiná', 8),
(326, 'Filadelfia', 8),
(327, 'La Dorada', 8),
(328, 'La Merced', 8),
(329, 'Manzanares', 8),
(330, 'Marmato', 8),
(331, 'Marquetalia', 8),
(332, 'Marulanda', 8),
(333, 'Neira', 8),
(334, 'Norcasia', 8),
(335, 'Pácora', 8),
(336, 'Palestina', 8),
(337, 'Pensilvania', 8),
(338, 'Riosucio', 8),
(339, 'Risaralda', 8),
(340, 'Salamina', 8),
(341, 'Samaná', 8),
(342, 'San José', 8),
(343, 'Supía', 8),
(344, 'Victoria', 8),
(345, 'Villamaría', 8),
(346, 'Viterbo', 8),
(347, 'Florencia', 9),
(348, 'Albania', 9),
(349, 'Belén de Los Andaquies', 9),
(350, 'Cartagena del Chairá', 9),
(351, 'Curillo', 9),
(352, 'El Doncello', 9),
(353, 'El Paujil', 9),
(354, 'La Montañita', 9),
(355, 'Milán', 9),
(356, 'Morelia', 9),
(357, 'Puerto Rico', 9),
(358, 'San José del Fragua', 9),
(359, 'San Vicente del Caguán', 9),
(360, 'Solano', 9),
(361, 'Solita', 9),
(362, 'Valparaíso', 9),
(363, 'Popayán', 11),
(364, 'Almaguer', 11),
(365, 'Argelia', 11),
(366, 'Balboa', 11),
(367, 'Bolívar', 11),
(368, 'Buenos Aires', 11),
(369, 'Cajibío', 11),
(370, 'Caldono', 11),
(371, 'Caloto', 11),
(372, 'Corinto', 11),
(373, 'El Tambo', 11),
(374, 'Florencia', 11),
(375, 'Guachené', 11),
(376, 'Guapi', 11),
(377, 'Inzá', 11),
(378, 'Jambaló', 11),
(379, 'La Sierra', 11),
(380, 'La Vega', 11),
(381, 'López', 11),
(382, 'Mercaderes', 11),
(383, 'Miranda', 11),
(384, 'Morales', 11),
(385, 'Padilla', 11),
(386, 'Paez', 11),
(387, 'Patía', 11),
(388, 'Piamonte', 11),
(389, 'Piendamó', 11),
(390, 'Puerto Tejada', 11),
(391, 'Puracé', 11),
(392, 'Rosas', 11),
(393, 'San Sebastián', 11),
(394, 'Santander de Quilichao', 11),
(395, 'Santa Rosa', 11),
(396, 'Silvia', 11),
(397, 'Sotara', 11),
(398, 'Suárez', 11),
(399, 'Sucre', 11),
(400, 'Timbío', 11),
(401, 'Timbiquí', 11),
(402, 'Toribio', 11),
(403, 'Totoró', 11),
(404, 'Villa Rica', 11),
(405, 'Valledupar', 12),
(406, 'Aguachica', 12),
(407, 'Agustín Codazzi', 12),
(408, 'Astrea', 12),
(409, 'Becerril', 12),
(410, 'Bosconia', 12),
(411, 'Chimichagua', 12),
(412, 'Chiriguaná', 12),
(413, 'Curumaní', 12),
(414, 'El Copey', 12),
(415, 'El Paso', 12),
(416, 'Gamarra', 12),
(417, 'González', 12),
(418, 'La Gloria', 12),
(419, 'La Jagua de Ibirico', 12),
(420, 'Manaure', 12),
(421, 'Pailitas', 12),
(422, 'Pelaya', 12),
(423, 'Pueblo Bello', 12),
(424, 'Río de Oro', 12),
(425, 'La Paz', 12),
(426, 'San Alberto', 12),
(427, 'San Diego', 12),
(428, 'San Martín', 12),
(429, 'Tamalameque', 12),
(430, 'Montería', 14),
(431, 'Ayapel', 14),
(432, 'Buenavista', 14),
(433, 'Canalete', 14),
(434, 'Cereté', 14),
(435, 'Chimá', 14),
(436, 'Chinú', 14),
(437, 'Ciénaga de Oro', 14),
(438, 'Cotorra', 14),
(439, 'La Apartada', 14),
(440, 'Lorica', 14),
(441, 'Los Córdobas', 14),
(442, 'Momil', 14),
(443, 'Montelíbano', 14),
(444, 'Moñitos', 14),
(445, 'Planeta Rica', 14),
(446, 'Pueblo Nuevo', 14),
(447, 'Puerto Escondido', 14),
(448, 'Puerto Libertador', 14),
(449, 'Purísima', 14),
(450, 'Sahagún', 14),
(451, 'San Andrés Sotavento', 14),
(452, 'San Antero', 14),
(453, 'San Bernardo del Viento', 14),
(454, 'San Carlos', 14),
(455, 'San José de Uré', 14),
(456, 'San Pelayo', 14),
(457, 'Tierralta', 14),
(458, 'Tuchín', 14),
(459, 'Valencia', 14),
(460, 'Agua de Dios', 15),
(461, 'Albán', 15),
(462, 'Anapoima', 15),
(463, 'Anolaima', 15),
(464, 'Arbeláez', 15),
(465, 'Beltrán', 15),
(466, 'Bituima', 15),
(467, 'Bojacá', 15),
(468, 'Cabrera', 15),
(469, 'Cachipay', 15),
(470, 'Cajicá', 15),
(471, 'Caparrapí', 15),
(472, 'Caqueza', 15),
(473, 'Carmen de Carupa', 15),
(474, 'Chaguaní', 15),
(475, 'Chía', 15),
(476, 'Chipaque', 15),
(477, 'Choachí', 15),
(478, 'Chocontá', 15),
(479, 'Cogua', 15),
(480, 'Cota', 15),
(481, 'Cucunubá', 15),
(482, 'El Colegio', 15),
(483, 'El Peñón', 15),
(484, 'El Rosal', 15),
(485, 'Facatativá', 15),
(486, 'Fomeque', 15),
(487, 'Fosca', 15),
(488, 'Funza', 15),
(489, 'Fúquene', 15),
(490, 'Fusagasugá', 15),
(491, 'Gachala', 15),
(492, 'Gachancipá', 15),
(493, 'Gachetá', 15),
(494, 'Gama', 15),
(495, 'Girardot', 15),
(496, 'Granada', 15),
(497, 'Guachetá', 15),
(498, 'Guaduas', 15),
(499, 'Guasca', 15),
(500, 'Guataquí', 15),
(501, 'Guatavita', 15),
(502, 'Guayabal de Siquima', 15),
(503, 'Guayabetal', 15),
(504, 'Gutiérrez', 15),
(505, 'Jerusalén', 15),
(506, 'Junín', 15),
(507, 'La Calera', 15),
(508, 'La Mesa', 15),
(509, 'La Palma', 15),
(510, 'La Peña', 15),
(511, 'La Vega', 15),
(512, 'Lenguazaque', 15),
(513, 'Macheta', 15),
(514, 'Madrid', 15),
(515, 'Manta', 15),
(516, 'Medina', 15),
(517, 'Mosquera', 15),
(518, 'Nariño', 15),
(519, 'Nemocón', 15),
(520, 'Nilo', 15),
(521, 'Nimaima', 15),
(522, 'Nocaima', 15),
(523, 'Venecia', 15),
(524, 'Pacho', 15),
(525, 'Paime', 15),
(526, 'Pandi', 15),
(527, 'Paratebueno', 15),
(528, 'Pasca', 15),
(529, 'Puerto Salgar', 15),
(530, 'Pulí', 15),
(531, 'Quebradanegra', 15),
(532, 'Quetame', 15),
(533, 'Quipile', 15),
(534, 'Apulo', 15),
(535, 'Ricaurte', 15),
(536, 'San Antonio del Tequendama', 15),
(537, 'San Bernardo', 15),
(538, 'San Cayetano', 15),
(539, 'San Francisco', 15),
(540, 'San Juan de Río Seco', 15),
(541, 'Sasaima', 15),
(542, 'Sesquilé', 15),
(543, 'Sibaté', 15),
(544, 'Silvania', 15),
(545, 'Simijaca', 15),
(546, 'Soacha', 15),
(547, 'Sopó', 15),
(548, 'Subachoque', 15),
(549, 'Suesca', 15),
(550, 'Supatá', 15),
(551, 'Susa', 15),
(552, 'Sutatausa', 15),
(553, 'Tabio', 15),
(554, 'Tausa', 15),
(555, 'Tena', 15),
(556, 'Tenjo', 15),
(557, 'Tibacuy', 15),
(558, 'Tibirita', 15),
(559, 'Tocaima', 15),
(560, 'Tocancipá', 15),
(561, 'Topaipí', 15),
(562, 'Ubalá', 15),
(563, 'Ubaque', 15),
(564, 'Villa de San Diego de Ubate', 15),
(565, 'Une', 15),
(566, 'Útica', 15),
(567, 'Vergara', 15),
(568, 'Vianí', 15),
(569, 'Villagómez', 15),
(570, 'Villapinzón', 15),
(571, 'Villeta', 15),
(572, 'Viotá', 15),
(573, 'Yacopí', 15),
(574, 'Zipacón', 15),
(575, 'Zipaquirá', 15),
(576, 'Quibdó', 13),
(577, 'Acandí', 13),
(578, 'Alto Baudo', 13),
(579, 'Atrato', 13),
(580, 'Bagadó', 13),
(581, 'Bahía Solano', 13),
(582, 'Bajo Baudó', 13),
(583, 'Bojaya', 13),
(584, 'El Cantón del San Pablo', 13),
(585, 'Carmen del Darien', 13),
(586, 'Cértegui', 13),
(587, 'Condoto', 13),
(588, 'El Carmen de Atrato', 13),
(589, 'El Litoral del San Juan', 13),
(590, 'Istmina', 13),
(591, 'Juradó', 13),
(592, 'Lloró', 13),
(593, 'Medio Atrato', 13),
(594, 'Medio Baudó', 13),
(595, 'Medio San Juan', 13),
(596, 'Nóvita', 13),
(597, 'Nuquí', 13),
(598, 'Río Iro', 13),
(599, 'Río Quito', 13),
(600, 'Riosucio', 13),
(601, 'San José del Palmar', 13),
(602, 'Sipí', 13),
(603, 'Tadó', 13),
(604, 'Unguía', 13),
(605, 'Unión Panamericana', 13),
(606, 'Neiva', 18),
(607, 'Acevedo', 18),
(608, 'Agrado', 18),
(609, 'Aipe', 18),
(610, 'Algeciras', 18),
(611, 'Altamira', 18),
(612, 'Baraya', 18),
(613, 'Campoalegre', 18),
(614, 'Colombia', 18),
(615, 'Elías', 18),
(616, 'Garzón', 18),
(617, 'Gigante', 18),
(618, 'Guadalupe', 18),
(619, 'Hobo', 18),
(620, 'Iquira', 18),
(621, 'Isnos', 18),
(622, 'La Argentina', 18),
(623, 'La Plata', 18),
(624, 'Nátaga', 18),
(625, 'Oporapa', 18),
(626, 'Paicol', 18),
(627, 'Palermo', 18),
(628, 'Palestina', 18),
(629, 'Pital', 18),
(630, 'Pitalito', 18),
(631, 'Rivera', 18),
(632, 'Saladoblanco', 18),
(633, 'San Agustín', 18),
(634, 'Santa María', 18),
(635, 'Suaza', 18),
(636, 'Tarqui', 18),
(637, 'Tesalia', 18),
(638, 'Tello', 18),
(639, 'Teruel', 18),
(640, 'Timaná', 18),
(641, 'Villavieja', 18),
(642, 'Yaguará', 18),
(643, 'Riohacha', 19),
(644, 'Albania', 19),
(645, 'Barrancas', 19),
(646, 'Dibulla', 19),
(647, 'Distracción', 19),
(648, 'El Molino', 19),
(649, 'Fonseca', 19),
(650, 'Hatonuevo', 19),
(651, 'La Jagua del Pilar', 19),
(652, 'Maicao', 19),
(653, 'Manaure', 19),
(654, 'San Juan del Cesar', 19),
(655, 'Uribia', 19),
(656, 'Urumita', 19),
(657, 'Villanueva', 19),
(658, 'Santa Marta', 20),
(659, 'Algarrobo', 20),
(660, 'Aracataca', 20),
(661, 'Ariguaní', 20),
(662, 'Cerro San Antonio', 20),
(663, 'Chivolo', 20),
(664, 'Ciénaga', 20),
(665, 'Concordia', 20),
(666, 'El Banco', 20),
(667, 'El Piñon', 20),
(668, 'El Retén', 20),
(669, 'Fundación', 20),
(670, 'Guamal', 20),
(671, 'Nueva Granada', 20),
(672, 'Pedraza', 20),
(673, 'Pijiño del Carmen', 20),
(674, 'Pivijay', 20),
(675, 'Plato', 20),
(676, 'Puebloviejo', 20),
(677, 'Remolino', 20),
(678, 'Sabanas de San Angel', 20),
(679, 'Salamina', 20),
(680, 'San Sebastián de Buenavista', 20),
(681, 'San Zenón', 20),
(682, 'Santa Ana', 20),
(683, 'Santa Bárbara de Pinto', 20),
(684, 'Sitionuevo', 20),
(685, 'Tenerife', 20),
(686, 'Zapayán', 20),
(687, 'Zona Bananera', 20),
(688, 'Villavicencio', 21),
(689, 'Acacías', 21),
(690, 'Barranca de Upía', 21),
(691, 'Cabuyaro', 21),
(692, 'Castilla la Nueva', 21),
(693, 'Cubarral', 21),
(694, 'Cumaral', 21),
(695, 'El Calvario', 21),
(696, 'El Castillo', 21),
(697, 'El Dorado', 21),
(698, 'Fuente de Oro', 21),
(699, 'Granada', 21),
(700, 'Guamal', 21),
(701, 'Mapiripán', 21),
(702, 'Mesetas', 21),
(703, 'La Macarena', 21),
(704, 'Uribe', 21),
(705, 'Lejanías', 21),
(706, 'Puerto Concordia', 21),
(707, 'Puerto Gaitán', 21),
(708, 'Puerto López', 21),
(709, 'Puerto Lleras', 21),
(710, 'Puerto Rico', 21),
(711, 'Restrepo', 21),
(712, 'San Carlos de Guaroa', 21),
(713, 'San Juan de Arama', 21),
(714, 'San Juanito', 21),
(715, 'San Martín', 21),
(716, 'Vistahermosa', 21),
(717, 'Pasto', 22),
(718, 'Albán', 22),
(719, 'Aldana', 22),
(720, 'Ancuyá', 22),
(721, 'Arboleda', 22),
(722, 'Barbacoas', 22),
(723, 'Belén', 22),
(724, 'Buesaco', 22),
(725, 'Colón', 22),
(726, 'Consaca', 22),
(727, 'Contadero', 22),
(728, 'Córdoba', 22),
(729, 'Cuaspud', 22),
(730, 'Cumbal', 22),
(731, 'Cumbitara', 22),
(732, 'Chachagüí', 22),
(733, 'El Charco', 22),
(734, 'El Peñol', 22),
(735, 'El Rosario', 22),
(736, 'El Tablón de Gómez', 22),
(737, 'El Tambo', 22),
(738, 'Funes', 22),
(739, 'Guachucal', 22),
(740, 'Guaitarilla', 22),
(741, 'Gualmatán', 22),
(742, 'Iles', 22),
(743, 'Imués', 22),
(744, 'Ipiales', 22),
(745, 'La Cruz', 22),
(746, 'La Florida', 22),
(747, 'La Llanada', 22),
(748, 'La Tola', 22),
(749, 'La Unión', 22),
(750, 'Leiva', 22),
(751, 'Linares', 22),
(752, 'Los Andes', 22),
(753, 'Magüi', 22),
(754, 'Mallama', 22),
(755, 'Mosquera', 22),
(756, 'Nariño', 22),
(757, 'Olaya Herrera', 22),
(758, 'Ospina', 22),
(759, 'Francisco Pizarro', 22),
(760, 'Policarpa', 22),
(761, 'Potosí', 22),
(762, 'Providencia', 22),
(763, 'Puerres', 22),
(764, 'Pupiales', 22),
(765, 'Ricaurte', 22),
(766, 'Roberto Payán', 22),
(767, 'Samaniego', 22),
(768, 'Sandoná', 22),
(769, 'San Bernardo', 22),
(770, 'San Lorenzo', 22),
(771, 'San Pablo', 22),
(772, 'San Pedro de Cartago', 22),
(773, 'Santa Bárbara', 22),
(774, 'Santacruz', 22),
(775, 'Sapuyes', 22),
(776, 'Taminango', 22),
(777, 'Tangua', 22),
(778, 'San Andres de Tumaco', 22),
(779, 'Túquerres', 22),
(780, 'Yacuanquer', 22),
(781, 'Cúcuta', 23),
(782, 'Abrego', 23),
(783, 'Arboledas', 23),
(784, 'Bochalema', 23),
(785, 'Bucarasica', 23),
(786, 'Cácota', 23),
(787, 'Cachirá', 23),
(788, 'Chinácota', 23),
(789, 'Chitagá', 23),
(790, 'Convención', 23),
(791, 'Cucutilla', 23),
(792, 'Durania', 23),
(793, 'El Carmen', 23),
(794, 'El Tarra', 23),
(795, 'El Zulia', 23),
(796, 'Gramalote', 23),
(797, 'Hacarí', 23),
(798, 'Herrán', 23),
(799, 'Labateca', 23),
(800, 'La Esperanza', 23),
(801, 'La Playa', 23),
(802, 'Los Patios', 23),
(803, 'Lourdes', 23),
(804, 'Mutiscua', 23),
(805, 'Ocaña', 23),
(806, 'Pamplona', 23),
(807, 'Pamplonita', 23),
(808, 'Puerto Santander', 23),
(809, 'Ragonvalia', 23),
(810, 'Salazar', 23),
(811, 'San Calixto', 23),
(812, 'San Cayetano', 23),
(813, 'Santiago', 23),
(814, 'Sardinata', 23),
(815, 'Silos', 23),
(816, 'Teorama', 23),
(817, 'Tibú', 23),
(818, 'Toledo', 23),
(819, 'Villa Caro', 23),
(820, 'Villa del Rosario', 23),
(821, 'Armenia', 25),
(822, 'Buenavista', 25),
(823, 'Calarca', 25),
(824, 'Circasia', 25),
(825, 'Córdoba', 25),
(826, 'Filandia', 25),
(827, 'Génova', 25),
(828, 'La Tebaida', 25),
(829, 'Montenegro', 25),
(830, 'Pijao', 25),
(831, 'Quimbaya', 25),
(832, 'Salento', 25),
(833, 'Pereira', 26),
(834, 'Apía', 26),
(835, 'Balboa', 26),
(836, 'Belén de Umbría', 26),
(837, 'Dosquebradas', 26),
(838, 'Guática', 26),
(839, 'La Celia', 26),
(840, 'La Virginia', 26),
(841, 'Marsella', 26),
(842, 'Mistrató', 26),
(843, 'Pueblo Rico', 26),
(844, 'Quinchía', 26),
(845, 'Santa Rosa de Cabal', 26),
(846, 'Santuario', 26),
(847, 'Bucaramanga', 28),
(848, 'Aguada', 28),
(849, 'Albania', 28),
(850, 'Aratoca', 28),
(851, 'Barbosa', 28),
(852, 'Barichara', 28),
(853, 'Barrancabermeja', 28),
(854, 'Betulia', 28),
(855, 'Bolívar', 28),
(856, 'Cabrera', 28),
(857, 'California', 28),
(858, 'Capitanejo', 28),
(859, 'Carcasí', 28),
(860, 'Cepitá', 28),
(861, 'Cerrito', 28),
(862, 'Charalá', 28),
(863, 'Charta', 28),
(864, 'Chima', 28),
(865, 'Chipatá', 28),
(866, 'Cimitarra', 28),
(867, 'Concepción', 28),
(868, 'Confines', 28),
(869, 'Contratación', 28),
(870, 'Coromoro', 28),
(871, 'Curití', 28),
(872, 'El Carmen de Chucurí', 28),
(873, 'El Guacamayo', 28),
(874, 'El Peñón', 28),
(875, 'El Playón', 28),
(876, 'Encino', 28),
(877, 'Enciso', 28),
(878, 'Florián', 28),
(879, 'Floridablanca', 28),
(880, 'Galán', 28),
(881, 'Gambita', 28),
(882, 'Girón', 28),
(883, 'Guaca', 28),
(884, 'Guadalupe', 28),
(885, 'Guapotá', 28),
(886, 'Guavatá', 28),
(887, 'Güepsa', 28),
(888, 'Hato', 28),
(889, 'Jesús María', 28),
(890, 'Jordán', 28),
(891, 'La Belleza', 28),
(892, 'Landázuri', 28),
(893, 'La Paz', 28),
(894, 'Lebríja', 28),
(895, 'Los Santos', 28),
(896, 'Macaravita', 28),
(897, 'Málaga', 28),
(898, 'Matanza', 28),
(899, 'Mogotes', 28),
(900, 'Molagavita', 28),
(901, 'Ocamonte', 28),
(902, 'Oiba', 28),
(903, 'Onzaga', 28),
(904, 'Palmar', 28),
(905, 'Palmas del Socorro', 28),
(906, 'Páramo', 28),
(907, 'Piedecuesta', 28),
(908, 'Pinchote', 28),
(909, 'Puente Nacional', 28),
(910, 'Puerto Parra', 28),
(911, 'Puerto Wilches', 28),
(912, 'Rionegro', 28),
(913, 'Sabana de Torres', 28),
(914, 'San Andrés', 28),
(915, 'San Benito', 28),
(916, 'San Gil', 28),
(917, 'San Joaquín', 28),
(918, 'San José de Miranda', 28),
(919, 'San Miguel', 28),
(920, 'San Vicente de Chucurí', 28),
(921, 'Santa Bárbara', 28),
(922, 'Santa Helena del Opón', 28),
(923, 'Simacota', 28),
(924, 'Socorro', 28),
(925, 'Suaita', 28),
(926, 'Sucre', 28),
(927, 'Suratá', 28),
(928, 'Tona', 28),
(929, 'Valle de San José', 28),
(930, 'Vélez', 28),
(931, 'Vetas', 28),
(932, 'Villanueva', 28),
(933, 'Zapatoca', 28),
(934, 'Sincelejo', 29),
(935, 'Buenavista', 29),
(936, 'Caimito', 29),
(937, 'Coloso', 29),
(938, 'Corozal', 29),
(939, 'Coveñas', 29),
(940, 'Chalán', 29),
(941, 'El Roble', 29),
(942, 'Galeras', 29),
(943, 'Guaranda', 29),
(944, 'La Unión', 29),
(945, 'Los Palmitos', 29),
(946, 'Majagual', 29),
(947, 'Morroa', 29),
(948, 'Ovejas', 29),
(949, 'Palmito', 29),
(950, 'Sampués', 29),
(951, 'San Benito Abad', 29),
(952, 'San Juan de Betulia', 29),
(953, 'San Marcos', 29),
(954, 'San Onofre', 29),
(955, 'San Pedro', 29),
(956, 'San Luis de Sincé', 29),
(957, 'Sucre', 29),
(958, 'Santiago de Tolú', 29),
(959, 'Tolú Viejo', 29),
(960, 'Ibagué', 30),
(961, 'Alpujarra', 30),
(962, 'Alvarado', 30),
(963, 'Ambalema', 30),
(964, 'Anzoátegui', 30),
(965, 'Armero', 30),
(966, 'Ataco', 30),
(967, 'Cajamarca', 30),
(968, 'Carmen de Apicalá', 30),
(969, 'Casabianca', 30),
(970, 'Chaparral', 30),
(971, 'Coello', 30),
(972, 'Coyaima', 30),
(973, 'Cunday', 30),
(974, 'Dolores', 30),
(975, 'Espinal', 30),
(976, 'Falan', 30),
(977, 'Flandes', 30),
(978, 'Fresno', 30),
(979, 'Guamo', 30),
(980, 'Herveo', 30),
(981, 'Honda', 30),
(982, 'Icononzo', 30),
(983, 'Lérida', 30),
(984, 'Líbano', 30),
(985, 'Mariquita', 30),
(986, 'Melgar', 30),
(987, 'Murillo', 30),
(988, 'Natagaima', 30),
(989, 'Ortega', 30),
(990, 'Palocabildo', 30),
(991, 'Piedras', 30),
(992, 'Planadas', 30),
(993, 'Prado', 30),
(994, 'Purificación', 30),
(995, 'Rioblanco', 30),
(996, 'Roncesvalles', 30),
(997, 'Rovira', 30),
(998, 'Saldaña', 30),
(999, 'San Antonio', 30),
(1000, 'San Luis', 30),
(1001, 'Santa Isabel', 30),
(1002, 'Suárez', 30),
(1003, 'Valle de San Juan', 30),
(1004, 'Venadillo', 30),
(1005, 'Villahermosa', 30),
(1006, 'Villarrica', 30),
(1007, 'Cali', 31),
(1008, 'Alcalá', 31),
(1009, 'Andalucía', 31),
(1010, 'Ansermanuevo', 31),
(1011, 'Argelia', 31),
(1012, 'Bolívar', 31),
(1013, 'Buenaventura', 31),
(1014, 'Guadalajara de Buga', 31),
(1015, 'Bugalagrande', 31),
(1016, 'Caicedonia', 31),
(1017, 'Calima', 31),
(1018, 'Candelaria', 31),
(1019, 'Cartago', 31),
(1020, 'Dagua', 31),
(1021, 'El Águila', 31),
(1022, 'El Cairo', 31),
(1023, 'El Cerrito', 31),
(1024, 'El Dovio', 31),
(1025, 'Florida', 31),
(1026, 'Ginebra', 31),
(1027, 'Guacarí', 31),
(1028, 'Jamundí', 31),
(1029, 'La Cumbre', 31),
(1030, 'La Unión', 31),
(1031, 'La Victoria', 31),
(1032, 'Obando', 31),
(1033, 'Palmira', 31),
(1034, 'Pradera', 31),
(1035, 'Restrepo', 31),
(1036, 'Riofrío', 31),
(1037, 'Roldanillo', 31),
(1038, 'San Pedro', 31),
(1039, 'Sevilla', 31),
(1040, 'Toro', 31),
(1041, 'Trujillo', 31),
(1042, 'Tuluá', 31),
(1043, 'Ulloa', 31),
(1044, 'Versalles', 31),
(1045, 'Vijes', 31),
(1046, 'Yotoco', 31),
(1047, 'Yumbo', 31),
(1048, 'Zarzal', 31),
(1049, 'Arauca', 4),
(1050, 'Arauquita', 4),
(1051, 'Cravo Norte', 4),
(1052, 'Fortul', 4),
(1053, 'Puerto Rondón', 4),
(1054, 'Saravena', 4),
(1055, 'Tame', 4),
(1056, 'Yopal', 10),
(1057, 'Aguazul', 10),
(1058, 'Chameza', 10),
(1059, 'Hato Corozal', 10),
(1060, 'La Salina', 10),
(1061, 'Maní', 10),
(1062, 'Monterrey', 10),
(1063, 'Nunchía', 10),
(1064, 'Orocué', 10),
(1065, 'Paz de Ariporo', 10),
(1066, 'Pore', 10),
(1067, 'Recetor', 10),
(1068, 'Sabanalarga', 10),
(1069, 'Sácama', 10),
(1070, 'San Luis de Palenque', 10),
(1071, 'Támara', 10),
(1072, 'Tauramena', 10),
(1073, 'Trinidad', 10),
(1074, 'Villanueva', 10),
(1075, 'Mocoa', 24),
(1076, 'Colón', 24),
(1077, 'Orito', 24),
(1078, 'Puerto Asís', 24),
(1079, 'Puerto Caicedo', 24),
(1080, 'Puerto Guzmán', 24),
(1081, 'Leguízamo', 24),
(1082, 'Sibundoy', 24),
(1083, 'San Francisco', 24),
(1084, 'San Miguel', 24),
(1085, 'Santiago', 24),
(1086, 'Valle del Guamuez', 24),
(1087, 'Villagarzón', 24),
(1088, 'San Andrés', 27),
(1089, 'Providencia', 27),
(1090, 'Leticia', 2),
(1091, 'El Encanto', 2),
(1092, 'La Chorrera', 2),
(1093, 'La Pedrera', 2),
(1094, 'La Victoria', 2),
(1095, 'Miriti - Paraná', 2),
(1096, 'Puerto Alegría', 2),
(1097, 'Puerto Arica', 2),
(1098, 'Puerto Nariño', 2),
(1099, 'Puerto Santander', 2),
(1100, 'Tarapacá', 2),
(1101, 'Inírida', 16),
(1102, 'Barranco Minas', 16),
(1103, 'Mapiripana', 16),
(1104, 'San Felipe', 16),
(1105, 'Puerto Colombia', 16),
(1106, 'La Guadalupe', 16),
(1107, 'Cacahual', 16),
(1108, 'Pana Pana', 16),
(1109, 'Morichal', 16),
(1110, 'San José del Guaviare', 17),
(1111, 'Calamar', 17),
(1112, 'El Retorno', 17),
(1113, 'Miraflores', 17),
(1114, 'Mitú', 32),
(1115, 'Caruru', 32),
(1116, 'Pacoa', 32),
(1117, 'Taraira', 32),
(1118, 'Papunaua', 32),
(1119, 'Yavaraté', 32),
(1120, 'Puerto Carreño', 33),
(1121, 'La Primavera', 33),
(1122, 'Santa Rosalía', 33),
(1123, 'Cumaribo', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivelacion`
--

CREATE TABLE `nivelacion` (
  `codigo` int(11) NOT NULL,
  `CodiEstu` int(255) NOT NULL,
  `Materia` varchar(500) COLLATE utf8_bin NOT NULL,
  `MateriaPrev` varchar(100) COLLATE utf8_bin NOT NULL,
  `Tema` varchar(500) COLLATE utf8_bin NOT NULL,
  `Progreso` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `nivelacion`
--

INSERT INTO `nivelacion` (`codigo`, `CodiEstu`, `Materia`, `MateriaPrev`, `Tema`, `Progreso`) VALUES
(31, 12, 'Microeconomía', 'Fundamentos de Matemáticas', 'Modulo 1', '100.0'),
(32, 12, 'Microeconomía', 'Fundamentos de Matemáticas', 'Modulo 2', '100.0'),
(33, 12, 'Microeconomía', 'Fundamentos de Matemáticas', 'Modulo 3', '100.0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `cod_pai` int(11) NOT NULL,
  `nom_pai` varchar(500) NOT NULL,
  `codigo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`cod_pai`, `nom_pai`, `codigo`) VALUES
(3, 'Afganistán', 'AF'),
(4, 'Albania', 'AL'),
(5, 'Alemania', 'DE'),
(6, 'Andorra', 'AD'),
(7, 'Angola', 'AO'),
(8, 'Anguilla', 'AI'),
(9, 'Antártida', 'AQ'),
(10, 'Antigua', 'AG'),
(11, 'Antillas', 'AN'),
(12, 'Arabia', 'SA'),
(13, 'Argelia', 'DZ'),
(14, 'Argentina', 'AR'),
(15, 'Armenia', 'AM'),
(16, 'Aruba', 'AW'),
(17, 'Australia', 'AU'),
(18, 'Austria', 'AT'),
(19, 'Azerbaiyán', 'AZ'),
(20, 'Bahamas', 'BS'),
(21, 'Bahrein', 'BH'),
(22, 'Bangladesh', 'BD'),
(23, 'Barbados', 'BB'),
(24, 'Bélgica', 'BE'),
(25, 'Belice', 'BZ'),
(26, 'Benin', 'BJ'),
(27, 'Bermudas', 'BM'),
(28, 'Bielorrusia', 'BY'),
(29, 'Birmania', 'MM'),
(30, 'Bolivia', 'BO'),
(31, 'Bosnia', 'BA'),
(32, 'Botswana', 'BW'),
(33, 'Brasil', 'BR'),
(34, 'Brunei', 'BN'),
(35, 'Bulgaria', 'BG'),
(36, 'Burkina', 'BF'),
(37, 'Burundi', 'BI'),
(38, 'Bután', 'BT'),
(39, 'Cabo', 'CV'),
(40, 'Camboya', 'KH'),
(41, 'Camerún', 'CM'),
(42, 'Canadá', 'CA'),
(43, 'Chad', 'TD'),
(44, 'Chile', 'CL'),
(45, 'China', 'CN'),
(46, 'Chipre', 'CY'),
(47, 'Ciudad', 'VA'),
(48, 'Colombia', 'CO'),
(49, 'Comores', 'KM'),
(50, 'Congo', 'CG'),
(51, 'Congo', 'CD'),
(52, 'Corea', 'KR'),
(53, 'Corea', 'KP'),
(54, 'Costa', 'CI'),
(55, 'Costa', 'CR'),
(56, 'Croacia', 'HR'),
(57, 'Cuba', 'CU'),
(58, 'Dinamarca', 'DK'),
(59, 'Djibouti', 'DJ'),
(60, 'Dominica', 'DM'),
(61, 'Ecuador', 'EC'),
(62, 'Egipto', 'EG'),
(63, 'El', 'SV'),
(64, 'Emiratos', 'AE'),
(65, 'Eritrea', 'ER'),
(66, 'Eslovenia', 'SI'),
(67, 'España', 'ES'),
(68, 'Estados', 'US'),
(69, 'Estonia', 'EE'),
(70, 'Etiopía', 'ET'),
(71, 'Fiji', 'FJ'),
(72, 'Filipinas', 'PH'),
(73, 'Finlandia', 'FI'),
(74, 'Francia', 'FR'),
(75, 'Gabón', 'GA'),
(76, 'Gambia', 'GM'),
(77, 'Georgia', 'GE'),
(78, 'Ghana', 'GH'),
(79, 'Gibraltar', 'GI'),
(80, 'Granada', 'GD'),
(81, 'Grecia', 'GR'),
(82, 'Groenlandia', 'GL'),
(83, 'Guadalupe', 'GP'),
(84, 'Guam', 'GU'),
(85, 'Guatemala', 'GT'),
(86, 'Guayana', 'GY'),
(87, 'Guayana', 'GF'),
(88, 'Guinea', 'GN'),
(89, 'Guinea', 'GQ'),
(90, 'Guinea', 'GW'),
(91, 'Haití', 'HT'),
(92, 'Honduras', 'HN'),
(93, 'Hungría', 'HU'),
(94, 'India', 'IN'),
(95, 'Indonesia', 'ID'),
(96, 'Irak', 'IQ'),
(97, 'Irán', 'IR'),
(98, 'Irlanda', 'IE'),
(99, 'Isla', 'BV'),
(100, 'Isla', 'CX'),
(101, 'Islandia', 'IS'),
(102, 'Islas', 'KY'),
(103, 'Islas', 'CK'),
(104, 'Islas', 'CC'),
(105, 'Islas', 'FO'),
(106, 'Islas', 'HM'),
(107, 'Islas', 'FK'),
(108, 'Islas', 'MP'),
(109, 'Islas', 'MH'),
(110, 'Islas', 'UM'),
(111, 'Islas', 'PW'),
(112, 'Islas', 'SB'),
(113, 'Islas', 'SJ'),
(114, 'Islas', 'TK'),
(115, 'Islas', 'TC'),
(116, 'Islas', 'VI'),
(117, 'Islas', 'VG'),
(118, 'Islas', 'WF'),
(119, 'Israel', 'IL'),
(120, 'Italia', 'IT'),
(121, 'Jamaica', 'JM'),
(122, 'Japón', 'JP'),
(123, 'Jordania', 'JO'),
(124, 'Kazajistán', 'KZ'),
(125, 'Kenia', 'KE'),
(126, 'Kirguizistán', 'KG'),
(127, 'Kiribati', 'KI'),
(128, 'Kuwait', 'KW'),
(129, 'Laos', 'LA'),
(130, 'Lesotho', 'LS'),
(131, 'Letonia', 'LV'),
(132, 'Líbano', 'LB'),
(133, 'Liberia', 'LR'),
(134, 'Libia', 'LY'),
(135, 'Liechtenstein', 'LI'),
(136, 'Lituania', 'LT'),
(137, 'Luxemburgo', 'LU'),
(138, 'Macedonia', 'MK'),
(139, 'Madagascar', 'MG'),
(140, 'Malasia', 'MY'),
(141, 'Malawi', 'MW'),
(142, 'Maldivas', 'MV'),
(143, 'Malí', 'ML'),
(144, 'Malta', 'MT'),
(145, 'Marruecos', 'MA'),
(146, 'Martinica', 'MQ'),
(147, 'Mauricio', 'MU'),
(148, 'Mauritania', 'MR'),
(149, 'Mayotte', 'YT'),
(150, 'México', 'MX'),
(151, 'Micronesia', 'FM'),
(152, 'Moldavia', 'MD'),
(153, 'Mónaco', 'MC'),
(154, 'Mongolia', 'MN'),
(155, 'Montserrat', 'MS'),
(156, 'Mozambique', 'MZ'),
(157, 'Namibia', 'NA'),
(158, 'Nauru', 'NR'),
(159, 'Nepal', 'NP'),
(160, 'Nicaragua', 'NI'),
(161, 'Níger', 'NE'),
(162, 'Nigeria', 'NG'),
(163, 'Niue', 'NU'),
(164, 'Norfolk', 'NF'),
(165, 'Noruega', 'NO'),
(166, 'Nueva', 'NC'),
(167, 'Nueva', 'NZ'),
(168, 'Omán', 'OM'),
(169, 'Países', 'NL'),
(170, 'Panamá', 'PA'),
(171, 'Papúa', 'PG'),
(172, 'Paquistán', 'PK'),
(173, 'Paraguay', 'PY'),
(174, 'Perú', 'PE'),
(175, 'Pitcairn', 'PN'),
(176, 'Polinesia', 'PF'),
(177, 'Polonia', 'PL'),
(178, 'Portugal', 'PT'),
(179, 'Puerto', 'PR'),
(180, 'Qatar', 'QA'),
(181, 'Reino', 'UK'),
(182, 'República', 'CF'),
(183, 'República', 'CZ'),
(184, 'República', 'ZA'),
(185, 'República', 'DO'),
(186, 'República', 'SK'),
(187, 'Reunión', 'RE'),
(188, 'Ruanda', 'RW'),
(189, 'Rumania', 'RO'),
(190, 'Rusia', 'RU'),
(191, 'Sahara', 'EH'),
(192, 'Saint', 'KN'),
(193, 'Samoa', 'WS'),
(194, 'Samoa', 'AS'),
(195, 'San', 'SM'),
(196, 'San', 'VC'),
(197, 'Santa', 'SH'),
(198, 'Santa', 'LC'),
(199, 'Santo', 'ST'),
(200, 'Senegal', 'SN'),
(201, 'Seychelles', 'SC'),
(202, 'Sierra', 'SL'),
(203, 'Singapur', 'SG'),
(204, 'Siria', 'SY'),
(205, 'Somalia', 'SO'),
(206, 'Sri', 'LK'),
(207, 'St', 'PM'),
(208, 'Suazilandia', 'SZ'),
(209, 'Sudán', 'SD'),
(210, 'Suecia', 'SE'),
(211, 'Suiza', 'CH'),
(212, 'Surinam', 'SR'),
(213, 'Tailandia', 'TH'),
(214, 'Taiwán', 'TW'),
(215, 'Tanzania', 'TZ'),
(216, 'Tayikistán', 'TJ'),
(217, 'Territorios', 'TF'),
(218, 'Timor', 'TP'),
(219, 'Togo', 'TG'),
(220, 'Tonga', 'TO'),
(221, 'Trinidad', 'TT'),
(222, 'Túnez', 'TN'),
(223, 'Turkmenistán', 'TM'),
(224, 'Turquía', 'TR'),
(225, 'Tuvalu', 'TV'),
(226, 'Ucrania', 'UA'),
(227, 'Uganda', 'UG'),
(228, 'Uruguay', 'UY'),
(229, 'Uzbekistán', 'UZ'),
(230, 'Vanuatu', 'VU'),
(231, 'Venezuela', 'VE'),
(232, 'Vietnam', 'VN'),
(233, 'Yemen', 'YE'),
(234, 'Yugoslavia', 'YU'),
(235, 'Zambia', 'ZM'),
(236, 'Zimbabue', 'ZW');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin DEFAULT NULL,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin DEFAULT NULL,
  `data_sql` longtext COLLATE utf8_bin DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programas`
--

CREATE TABLE `programas` (
  `Codigo` int(20) NOT NULL,
  `Nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `Tipo` varchar(100) COLLATE utf8_bin NOT NULL,
  `Modalidad` varchar(100) COLLATE utf8_bin NOT NULL,
  `NumSemestres` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `programas`
--

INSERT INTO `programas` (`Codigo`, `Nombre`, `Tipo`, `Modalidad`, `NumSemestres`) VALUES
(1, 'Derecho', '', '', 10),
(2, 'Contaduría pública', '', '', 10),
(3, 'Administración de Empresas', '', '', 10),
(4, 'Ingeniería', '', '', 10),
(6, 'Humanidades', 'profesional', 'Presencial', 10),
(7, 'Artes', 'profesional', 'Presencial', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `semestre`
--

CREATE TABLE `semestre` (
  `codiseme` int(11) NOT NULL,
  `codicarr` int(11) NOT NULL,
  `nombseme` int(11) NOT NULL,
  `numeseme` int(11) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `fechdigi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sub_conte`
--

CREATE TABLE `sub_conte` (
  `id` int(11) NOT NULL,
  `NombCont` varchar(500) COLLATE utf8_bin NOT NULL,
  `estado` int(11) NOT NULL,
  `esta_apro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `sub_conte`
--

INSERT INTO `sub_conte` (`id`, `NombCont`, `estado`, `esta_apro`) VALUES
(1, 'Bienvenid@', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `coditema` int(11) NOT NULL,
  `codiunid` int(11) NOT NULL,
  `nombtema` varchar(150) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `fechdigi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas_cursos`
--

CREATE TABLE `temas_cursos` (
  `Orden` int(11) NOT NULL,
  `Puesto` int(11) NOT NULL,
  `CodiMate` int(11) NOT NULL,
  `Materia` varchar(200) COLLATE utf8_bin NOT NULL,
  `Seccion` varchar(150) COLLATE utf8_bin NOT NULL DEFAULT 'Objetivos/Equipo/Horario/Teoria/Video/PruebaAsoc/PruebaRespUnica/PruebaFrase/ActividadRef/Taller/CalificacionT/Evaluacion/CalificacionE',
  `NombModulo` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Modulo # - Nombre Modulo',
  `NombLeccion` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Nombre Lección',
  `NombSeccion` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Nombre Seccion',
  `Contenido` varchar(10000) COLLATE utf8_bin NOT NULL,
  `Creador` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Admin',
  `idCreador` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `temas_cursos`
--

INSERT INTO `temas_cursos` (`Orden`, `Puesto`, `CodiMate`, `Materia`, `Seccion`, `NombModulo`, `NombLeccion`, `NombSeccion`, `Contenido`, `Creador`, `idCreador`) VALUES
(1, 1, 1, '', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Objetivo 6</p>imagen_obj.png</p>Contenido</p>fundamentos U.P.C. Ejemplo.pdf</p>Libro guia Ejemplo.pdf', 'Admin', 0),
(2, 2, 1, '', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Nombre del Docente</p>Descripción Docente</p>fotografia_docente.png</p>Contenido Bienvenida', 'Admin', 0),
(3, 3, 1, '', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Dia</p>Inicio: -  Fin:</p>Lunes</p>Inicio: 07:00 a.m.  -  Fin: 09:00 a.m.</p>Jueves</p>Inicio: 07:00 a.m.  -  Fin: 09:00 a.m.</p>./curso_ejemplo/0 Módulo 0 - Bienvenida al curso/3 Horario y cronograma/Cronograma Ejemplo.pdf', 'Admin', 0),
(13, 13, 1, '', 'Evaluacion', 'Evaluacion 2', 'EVALUACION', 'Examen', '¿\"Esta es la Pregunta?</p>Respuesta 1A</p>Respuesta 1B</p>Respuesta 1C</p>Respuesta 1D</p>¿\"Esta es la Pregunta?</p>Respuesta 2A</p>Respuesta 2B</p>Respuesta 2C</p>Respuesta 2D</p>¿\"Esta es la Pregunta?</p>Respuesta 3A</p>Respuesta 3B</p>Respuesta 3C</p>Respuesta3D</p>¿\"Esta es la Pregunta?</p>Respuesta 4A</p>Respuesta 4B</p>Respuesta 4C</p>Respuesta4D</p>¿\"Esta es la Pregunta?</p>Respuesta 5A</p>Respuesta 5B</p>Respuesta 5C</p>Respuesta 5D</p>¿\"Esta es la Pregunta?</p>Respuesta 6A</p>Respuesta 6B</p>Respuesta 6C</p>Respuesta 6D</p>¿\"Esta es la Pregunta?</p>Respuesta 7A</p>Respuesta 7B</p>Respuesta 7C</p>Respuesta7D', 'Admin', 0),
(14, 14, 1, '', 'CalificacionE', 'Evaluacion 2', 'EVALUACION', 'Calificación Examen', 'Mensaje Despedida</p>B:Explicacion</p>C:Explicacion</p>D:Explicacion</p>B:Explicacion</p>A:Explicacion</p>B:Explicacion</p>D:Explicacion', 'Admin', 0),
(49, 1, 5, 'Curso de Prueba', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4', 'Admin', 0),
(50, 2, 5, 'Curso de Prueba', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1', 'Admin', 0),
(62, 15, 1, 'Normatividad COVID - 19', 'PruebaRespUnica', 'Modulo 1', 'Leccion 1', 'Prueba 1', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4</p>Opción 5</p>Enunciado</p>Opción 3', 'Admin', 0),
(63, 1, 11, 'Curso Doc', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', '1</p>2</p>3</p>4', 'Admin', 16),
(64, 2, 11, 'Curso Doc', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1', 'Admin', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas_materias`
--

CREATE TABLE `temas_materias` (
  `Orden` int(11) NOT NULL,
  `Puesto` int(11) NOT NULL,
  `CodiMate` int(11) NOT NULL,
  `Materia` varchar(100) COLLATE utf8_bin NOT NULL,
  `Seccion` varchar(150) COLLATE utf8_bin NOT NULL DEFAULT 'Objetivos/Equipo/Horario/Teoria/Video/PruebaAsoc/PruebaRespUnica/PruebaFrase/ActividadRef/Taller/CalificacionT/Evaluacion/CalificacionE',
  `NombModulo` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Modulo # - Nombre Modulo',
  `NombLeccion` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Nombre Lección',
  `NombSeccion` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Nombre Seccion',
  `Contenido` mediumtext COLLATE utf8_bin NOT NULL DEFAULT 'OBJETIVOS:*Contenido Introducción</p>Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4*EQUIPO:*Nombre del Docente</p>Descripción Docente</p>fotografia_docente.png</p>Bienvenida*HORARIO:*Horario*TEORIA:*Titulo 1</p>Contenido 1</p>Titulo 2</p>Contenido 2* VIDEO:*Titulo video</p>video.mp4* PRUEBA ASOCIACION:*Opción 1</p>Opción 2</p>Opción 3</p>Opción 4</p> Respuesta 1</p>Respuesta 2</p>Respuesta 3</p>Respuesta 4* PRUEBA RESPUESTA UNICA:*Opción 1</p>Opción 2</p>Opción 3</p>Opción 4</p>Respuesta* PRUEBA FRASE :*Enunciado 1</p>Completar 1</p>Enunciado 2</p>Completar 2</p>Enunciado 3</p>Completar 3</p>Enunciado 4</p>Completar 4*ACTIVIDAD REFUERZO:*Titulo Actividad</p>Enunciado Actividad</p>Solucion1.pdf</p>Solucion2.mp4*TALLER:*Enunciado Taller*CALIFICACION TALLER:*Nota</p>Calificacion</p>Solucion1.pdf</p>Solucion2.mp4*EVALUACION:*¿"Esta es la Pregunta?</p>Respuesta 1A</p>Respuesta 1B</p>Respuesta 1C</p>Respuesta 1D</p>¿"Esta es la Pregunta?</p>Respuesta 2A</p>Respuesta 2B</p>Respuesta 2C</p>Respuesta 2D</p>¿"Esta es la Pregunta?</p>Respuesta 3A</p>Respuesta 3B</p>Respuesta 3C</p>Respuesta3D</p>¿"Esta es la Pregunta?</p>Respuesta 4A</p>Respuesta 4B</p>Respuesta 4C</p>Respuesta4D</p>¿"Esta es la Pregunta?</p>Respuesta 5A</p>Respuesta 5B</p>Respuesta 5C</p>Respuesta 5D</p>¿"Esta es la Pregunta?</p>Respuesta 6A</p>Respuesta 6B</p>Respuesta 6C</p>Respuesta 6D*CALIFICACION:*Mensaje Despedida</p>A:Explicacion</p>C:Explicacion</p>D:Explicacion</p>B:Explicacion</p>A:Explicacion</p>B:Explicacion*',
  `Creador` varchar(50) COLLATE utf8_bin NOT NULL DEFAULT 'Admin',
  `idCreador` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `temas_materias`
--

INSERT INTO `temas_materias` (`Orden`, `Puesto`, `CodiMate`, `Materia`, `Seccion`, `NombModulo`, `NombLeccion`, `NombSeccion`, `Contenido`, `Creador`, `idCreador`) VALUES
(1, 1, 1, 'Microeconomía', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Objetivo 6</p>Fundamentos', '', 0),
(2, 2, 1, 'Microeconomía', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1</p>Descripción Docente', '', 0),
(3, 3, 1, 'Microeconomía', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Dia</p>Inicio: -  Fin:</p>Lunes</p>Inicio: 07:00 a.m.  -  Fin: 09:00 a.m.</p>Jueves</p>Inicio: 07:00 a.m.  -  Fin: 09:00 a.m.</p>./curso_ejemplo/0 Módulo 0 - Bienvenida al curso/3 Horario y cronograma/Cronograma Ejemplo.pdf', '', 0),
(4, 4, 1, 'Microeconomía', 'Teoria', 'Modulo1', 'Lección 1', 'Teoria', '<p>Titulo 1Contenido 1Titulo 2Contenido 2</p>', '', 0),
(5, 5, 1, 'Microeconomía', 'Video', 'Modulo1', 'Lección 1', 'NULL', 'Titulo video</p>https://www.youtube-nocookie.com/embed/yO0IHTnjshM?AutoHide=1&showinfo=0&modestbranding=1&rel=0', '', 0),
(8, 11, 1, 'Microeconomía', 'PruebaFrase', 'Normativas', 'Leccion 3', 'Prueba Frase', 'Completar 1</p>Completar 2</p>Completar 3</p>Completar 4</p>Enunciado 1</p>Enunciado 2</p>Enunciado 3</p>Enunciado 4', '', 0),
(9, 12, 1, 'Microeconomía', 'ActividadRef', 'Normativas', 'Leccion 3', 'Actividad de Refuerzo', 'Titulo Actividad</p>Enunciado Actividad</p>prueba.pdf</p>https://www.youtube-nocookie.com/embed/yO0IHTnjshM?AutoHide=1&showinfo=0&modestbranding=1&rel=0', '', 0),
(10, 15, 1, 'Microeconomía', 'Taller', 'Mercados', 'TALLER', 'Taller', 'Enunciado del Taller</p>imagen_taller.png', '', 0),
(11, 16, 1, 'Microeconomía', 'CalificacionT', 'Mercados', 'TALLER', 'Calificación Taller', 'Calificacion</p>./curso_ejemplo/1 Módulo 1 - Nombre del módulo/1 Trabajo - Taller 1/Solución Ejemplo T-T 1.pdf</p>./curso_ejemplo/1 Módulo 1 - Nombre del módulo/4 Trabajo - Taller 1/Solución Ejemplo T-T 1.mp4', '', 0),
(14, 1, 2, 'Derecho Penal', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Fundamentos Derecho Penal', '', 0),
(15, 2, 2, 'Derecho Penal', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 2</p>Palabras de Bienvenida', '', 0),
(16, 3, 2, 'Derecho Penal', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>22:42</p>12:42</p>Miercoles</p>15:36</p>17:36', '', 0),
(17, 4, 2, 'Derecho Penal', 'Teoria', 'Modulo A', 'Leccion A', 'Teoría 1', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1>\n<p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p>\n<h2> </h2>\n<h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2>\n<h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1>\n<p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p>\n<div> </div>', '', 0),
(18, 5, 2, 'Derecho Penal', 'Video', 'Modulo A', 'Leccion A', 'Video1', 'Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR', '', 0),
(20, 6, 2, 'Derecho Penal', 'PruebaAsoc', 'Modulo A', 'Leccion A', 'Asociación 1', 'Concepto 1</p>Concepto 2</p>Concepto 3</p>Concepto 4</p>Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', '', 0),
(22, 7, 2, 'Derecho Penal', 'PruebaRespUnica', 'Modulo A', 'Leccion A', 'Prueba selección', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4</p>Enunciado de la pregunta</p>Opción 2', '', 0),
(23, 8, 2, 'Derecho Penal', 'PruebaFrase', 'Modulo A', 'Leccion A', 'Prueba Frase 1', 'para</p>frase</p>contexto</p>configuración</p>Esta es una prueba</p>completar una</p>, por favor completar los campos requeridos dependiendo del</p>y verificar la respuesta al hacer la', '', 0),
(24, 9, 2, 'Derecho Penal', 'ActividadRef', 'Modulo A', 'Leccion A', 'Refuerzo 1', '<h1 style=\"text-align: center;\">Titulo Actividad</h1>\n<p style=\"text-align: justify;\">Contenido actividad</p>', '', 0),
(26, 1, 3, 'Introducción a la economía', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Fundamentos de la materia', '', 0),
(27, 2, 3, 'Introducción a la economía', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 2</p>Bienvenida', '', 0),
(28, 3, 3, 'Introducción a la economía', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Martes</p>14:0</p>16:0</p>Miercoles</p>7:0</p>9:0', '', 0),
(30, 1, 4, 'Fundamentos de Matemáticas', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Fundamentos', '', 0),
(31, 2, 4, 'Fundamentos de Matemáticas', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1</p>Bienvenida', '', 0),
(32, 3, 4, 'Fundamentos de Matemáticas', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Miercoles</p>15:48</p>19:48</p>Jueves</p>7:48</p>9:48', '', 0),
(33, 4, 4, 'Fundamentos de Matemáticas', 'Teoria', 'NULL', 'NULL', 'NULL', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p><h2> </h2><h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2><h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p><div> </div>', '', 0),
(34, 1, 5, 'Calculo integral', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Fundamentos', '', 0),
(35, 2, 5, 'Calculo integral', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 2</p>Bienvenida', '', 0),
(36, 3, 5, 'Calculo integral', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>16:0</p>18:0</p>Martes</p>8:0</p>10:0', '', 0),
(37, 4, 5, 'Calculo integral', 'Teoría', 'NULL', 'NULL', 'NULL', 'NULL', '', 0),
(38, 5, 5, 'Calculo integral', 'Teoría', 'NULL', 'NULL', 'NULL', 'NULL', '', 0),
(39, 6, 5, 'Calculo integral', 'Teoria', 'NULL', 'NULL', 'NULL', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p><h2> </h2><h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2><h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p><div> </div>', '', 0),
(58, 1, 6, 'Derecho Comercial', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivos 1</p>Objetivos 2</p>Objetivos 3</p>Objetivos 4</p>Objetivos 5</p>Objetivos 6</p>Fundamentos', '', 0),
(59, 2, 6, 'Derecho Comercial', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 2</p>Bienvenida', '', 0),
(60, 3, 6, 'Derecho Comercial', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>16:35</p>18:35</p>Martes</p>9:35</p>10:35', '', 0),
(61, 4, 6, 'Derecho Comercial', 'Teoría', 'NULL', 'NULL', 'NULL', 'NULL', '', 0),
(62, 5, 6, 'Derecho Comercial', 'Teoría', 'NULL', 'NULL', 'NULL', 'NULL', '', 0),
(63, 6, 6, 'Derecho Comercial', 'Teoria', 'NULL', 'NULL', 'NULL', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p><h2> </h2><h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2><h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p><div> </div>', '', 0),
(70, 1, 7, 'Planeacion Empresarial', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Fundamentos', '', 0),
(71, 2, 7, 'Planeacion Empresarial', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1</p>Bienvenida', '', 0),
(72, 3, 7, 'Planeacion Empresarial', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>19:3</p>17:3', '', 0),
(73, 1, 8, 'Derecho constitucional', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo mod</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Fundamentos', '', 0),
(74, 2, 8, 'Derecho constitucional', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1</p>Palabras', '', 0),
(75, 3, 8, 'Derecho constitucional', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>17:15</p>20:15', '', 0),
(76, 1, 9, 'Macroeconomia', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', 'Objetivo 1</p>Objetivo 2</p>Objetivo 3</p>Objetivo 4</p>Objetivo 5</p>Fundamentos', '', 0),
(77, 2, 9, 'Macroeconomia', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1</p>Bienvenida', '', 0),
(78, 3, 9, 'Macroeconomia', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>17:24</p>19:24', '', 0),
(82, 7, 4, 'Fundamentos de Matemáticas', 'Teoria', 'NULL', 'NULL', 'Teoria 2', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p><h2> </h2><h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2><h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p><div> </div>', '', 0),
(83, 8, 4, 'Fundamentos de Matemáticas', 'Teoria', 'Modulo 3', 'Leccion 3', 'Teoría 3', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p><h2> </h2><h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2><h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1><p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p><div> </div>', '', 0),
(84, 9, 4, 'Fundamentos de Matemáticas', 'Video', 'Modulo 3', 'Leccion 3A', 'Video 3', 'Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR', '', 0),
(85, 5, 4, 'Fundamentos de Matemáticas', 'Video', 'NULL', 'NULL', 'Video 1', 'Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR', '', 0),
(86, 6, 4, 'Fundamentos de Matemáticas', 'Video', 'NULL', 'Leccion 1A', 'Video 1A', 'Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR', '', 0),
(93, 4, 8, 'Derecho constitucional', 'Teoría', 'NULL', 'NULL', 'NULL', 'NULL', '', 0),
(101, 7, 5, 'Calculo integral', 'PruebaAsoc', 'NULL', 'NULL', 'Prueba', 'Concepto 1</p>Concepto 2</p>Concepto 3</p>Concepto 4</p>Opción 1</p>Opción 2</p>Opción 3</p>Opción 4', '', 0),
(107, 1, 14, 'Materia Prueba', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', '1</p>2</p>3</p>4</p>5</p>6</p>Fundamentos', '', 0),
(108, 2, 14, 'Materia Prueba', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 1</p>Palabras', '', 0),
(109, 3, 14, 'Materia Prueba', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>16:4</p>17:4</p>Martes</p>18:4</p>20:4', '', 0),
(110, 4, 14, 'Materia Prueba', 'Taller', 'Modulo 1A', 'Taller - Modulo 1A', 'Taller', '<h1 style=\"text-align: center;\">Titulo Taller</h1>\n<p style=\"text-align: justify;\">Enunciado</p>', '', 0),
(111, 5, 14, 'Materia Prueba', 'Teoría', 'Modulo 1A', 'NULL', 'NULL', 'NULL', '', 0),
(112, 6, 14, 'Materia Prueba', 'Teoria', 'Modulo 1A', 'NULL', 'NULL', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1 modificado</span></h1>\n<p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p>\n<h2> </h2>\n<h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #e67e23;\"><em>Subtitulo</em></span></h2>\n<h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1>\n<p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p>\n<div> </div>', '', 0),
(113, 7, 14, 'Materia Prueba', 'Video', 'Modulo 1A', 'NULL', 'Video 1', 'Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR', '', 0),
(116, 9, 14, 'Materia Prueba', 'CalificacionT', 'Modulo 1A', 'Taller - Modulo 1A', 'Calificacion', 'Calificacion</p>./curso_ejemplo/1 Módulo 1 - Nombre del módulo/1 Trabajo - Taller 1/Solución Ejemplo T-T 1.pdf</p>./curso_ejemplo/1 Módulo 1 - Nombre del módulo/4 Trabajo - Taller 1/Solución Ejemplo T-T 1.mp4', '', 0),
(117, 10, 14, 'Materia Prueba', 'Teoría', 'NULL', 'NULL', 'NULL', 'NULL', '', 0),
(175, 17, 1, 'EvaluacionMicroeconomía', 'Evaluacion', 'Evaluacion 1', 'Evaluacion', 'Examen', 'Estadística Mod:Lección 1', '', 0),
(176, 18, 1, 'EvaluacionMicroeconomía', 'CalificacionE', 'Evaluacion 1', 'Evaluacion', 'Calificacion Examen', 'Mensaje Despedida</p>B:Explicacion</p>C:Explicacion</p>D:Explicacion</p>B:Explicacion</p>A:Explicacion</p>B:Explicacion</p>D:Explicacion', '', 0),
(177, 6, 1, 'Microeconomía', 'Video', 'Modulo1', 'Lección 1', 'Video 1', 'Titulo del video</p>https://www.youtube.com/watch?v=MdNXu8gjFDQ&ab_channel=ComunicacionesAUNAR', '', 0),
(224, 1, 31, 'Materia Doc', 'Objetivos', 'INTRODUCCION', 'Bienvenid@', 'Objetivos', '1</p>2</p>3</p>4</p>hgfd', 'Admin', 12),
(225, 2, 31, 'Materia Doc', 'Equipo', 'INTRODUCCION', 'Bienvenid@', 'Conoce a tu docente', 'Docente Prueba 2</p>sdgdsfgdfg', 'Admin', 12),
(226, 3, 31, 'Materia Doc', 'Horario', 'INTRODUCCION', 'Bienvenid@', 'Horario y Cronograma', 'Lunes</p>3:19</p>5:19', 'Admin', 12),
(227, 4, 3, 'Introducción a la economía', 'Teoria', 'Modulo 1', 'Leccion 1', 'Teoria', '<h1 style=\"text-align: center;\"><span style=\"color: #000000; font-family: verdana, geneva, sans-serif;\">TITULO 1</span></h1>\n<p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif; color: #000000;\">Contenido Teoria 1</span><br /><span style=\"font-family: verdana, geneva, sans-serif;\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"AUNAR\" src=\"imagenesContenido/Aunar.png\" alt=\"\" width=\"200\" height=\"202\" /></span></p>\n<h2> </h2>\n<h2 style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\"><em>Subtitulo</em></span></h2>\n<h1 style=\"text-align: center;\"><span style=\"font-family: verdana, geneva, sans-serif;\">TITULO 2</span></h1>\n<p style=\"text-align: left;\"><span style=\"font-family: verdana, geneva, sans-serif;\">Contenido Teoria 2 </span></p>\n<div> </div>', 'Admin', 0),
(228, 5, 3, 'Introducción a la economía', 'PruebaRespUnica', 'Modulo 1', 'Leccion 1', 'Prueba1', 'Opción 1</p>Opción 2</p>Opción 3</p>Opción 4</p>Enunciado</p>Opción 3', 'Admin', 0),
(229, 6, 3, 'Introducción a la economía', 'Teoría', 'Modulo 1', 'Leccion 2', 'NULL', 'NULL', 'Admin', 0);

--
-- Disparadores `temas_materias`
--
DELIMITER $$
CREATE TRIGGER `Numero de modulos delete` AFTER DELETE ON `temas_materias` FOR EACH ROW UPDATE materias SET Modulos =
(SELECT COUNT(DISTINCT temas_materias.NombModulo) FROM temas_materias WHERE CodiMate=materias.Codigo)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `Numero de modulos insert` AFTER INSERT ON `temas_materias` FOR EACH ROW UPDATE materias SET Modulos =
(SELECT COUNT(DISTINCT temas_materias.NombModulo) FROM temas_materias WHERE CodiMate=materias.Codigo)
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `Cont` int(11) NOT NULL,
  `Producto` varchar(100) COLLATE utf8_bin NOT NULL,
  `Modelo` varchar(100) COLLATE utf8_bin NOT NULL,
  `Informacion` varchar(3000) COLLATE utf8_bin NOT NULL,
  `Imagen` varchar(100) COLLATE utf8_bin NOT NULL,
  `Precio` varchar(100) COLLATE utf8_bin NOT NULL,
  `Disponible` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tienda`
--

INSERT INTO `tienda` (`Cont`, `Producto`, `Modelo`, `Informacion`, `Imagen`, `Precio`, `Disponible`) VALUES
(1, 'RASPBERRY PI 3B', 'AXM-0001', 'KIT RASPBERRY', 'raspberry.png', '259.000', 0),
(2, 'ARDUINO NANO', 'AXM-0002', 'KIT ARDUINO NANO', 'arduino-nano.png', '19.000', 1),
(3, 'CARRO RC', 'AXM-0003', 'KIT CARRO RC', 'carro-rc.png', '899.000', 1),
(4, 'IMPRESORA 3D', 'AXM-0004', 'KIT IMPRESORA 3D', 'impresora-3d.png', '2\'439.000', 1),
(5, 'DRONE', 'AXM-0005', 'KIT DRONE', 'drone.png', '759.000', 1),
(6, 'AEROMODELO', 'AXM-0006', 'KIT AEROMODELO', 'aeromodelo.png', '1\'679.000', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoinsc`
--

CREATE TABLE `tipoinsc` (
  `CodiTipo` int(11) NOT NULL,
  `NombTipo` varchar(100) COLLATE utf8_bin NOT NULL,
  `UsuaDigi` int(11) NOT NULL,
  `FechDigi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipopreg`
--

CREATE TABLE `tipopreg` (
  `coditipo` int(11) NOT NULL,
  `nombtipo` varchar(200) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `fechdigi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousua`
--

CREATE TABLE `tipousua` (
  `CodiUsua` int(11) NOT NULL,
  `NombUsua` varchar(100) COLLATE utf8_bin NOT NULL,
  `UsuaDigi` int(11) NOT NULL,
  `FechDigi` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tipousua`
--

INSERT INTO `tipousua` (`CodiUsua`, `NombUsua`, `UsuaDigi`, `FechDigi`) VALUES
(1, 'admin', 1, '2020-11-01'),
(2, 'estudiante', 1, '2020-12-09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `unidades`
--

CREATE TABLE `unidades` (
  `CodiUnid` int(11) NOT NULL,
  `CodiMate` int(11) NOT NULL,
  `NombUnid` int(11) NOT NULL,
  `usuadigi` int(11) NOT NULL,
  `fechdigi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `CodiUsua` int(11) NOT NULL,
  `TipoDocu` varchar(3) COLLATE utf8_bin NOT NULL,
  `NumeDocu` int(11) NOT NULL,
  `Nom1Usua` varchar(50) COLLATE utf8_bin NOT NULL,
  `DireUsua` varchar(150) COLLATE utf8_bin NOT NULL,
  `Pais` varchar(2) COLLATE utf8_bin DEFAULT NULL,
  `Departamento` varchar(5) COLLATE utf8_bin DEFAULT NULL,
  `Municipio` varchar(5) COLLATE utf8_bin DEFAULT NULL,
  `TeleUsua` bigint(12) NOT NULL,
  `EmaiUsua` varchar(100) COLLATE utf8_bin NOT NULL,
  `FotoUsua` varchar(150) COLLATE utf8_bin NOT NULL,
  `TipoUsua` int(11) NOT NULL,
  `Password` varchar(250) COLLATE utf8_bin NOT NULL,
  `GeneUsua` varchar(5) COLLATE utf8_bin NOT NULL,
  `EdadUsua` int(11) NOT NULL,
  `Profesion` varchar(200) COLLATE utf8_bin NOT NULL,
  `Especializacion` varchar(200) COLLATE utf8_bin NOT NULL,
  `Maestria` varchar(200) COLLATE utf8_bin NOT NULL,
  `Doctorado` varchar(200) COLLATE utf8_bin NOT NULL,
  `Perfil` varchar(2000) COLLATE utf8_bin NOT NULL,
  `Sede` varchar(200) COLLATE utf8_bin NOT NULL,
  `FechDigi` date NOT NULL,
  `Semestre` int(20) NOT NULL DEFAULT 0,
  `Programa` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`CodiUsua`, `TipoDocu`, `NumeDocu`, `Nom1Usua`, `DireUsua`, `Pais`, `Departamento`, `Municipio`, `TeleUsua`, `EmaiUsua`, `FotoUsua`, `TipoUsua`, `Password`, `GeneUsua`, `EdadUsua`, `Profesion`, `Especializacion`, `Maestria`, `Doctorado`, `Perfil`, `Sede`, `FechDigi`, `Semestre`, `Programa`) VALUES
(1, '1', 1085935883, 'JUAN DAVID PABON ROSERO', 'CRA 9', 'CO', '22', '756', 3167351117, 'juand8756@gmail.com', 'sss', 1, '202cb962ac59075b964b07152d234b70', '1', 21, '', '', '', '', '', '', '2020-11-01', 0, ''),
(2, '1', 87215, 'Carlos Rubio', 'Cra 1', 'CO', '22', '744', 316841251, 'carlos@gmail.com', '1', 2, '202cb962ac59075b964b07152d234b70', '0', 37, '', '', '', '', '', '', '2020-12-09', 0, ''),
(3, '1', 123456789, 'Prueba', 'Prueba', 'CO', '22', '744', 3168759528, 'prueba@gmail.com', '1', 2, '202cb962ac59075b964b07152d234b70', '0', 39, '', '', '', '', '', '', '2020-12-12', 0, ''),
(4, '1', 1085322519, 'Cristian Enriquez', 'Calle 17 A # 8-E 21', 'CO', '22', '717', 3163228112, 'cristianenterprise04@gmail.com', '1', 2, '10eaa2f227f8ef249c742bc00d6624b0', '0', 25, '', '', '', '', '', '', '2021-01-07', 0, ''),
(5, '1', 1097899566, 'Jazmin Benavides', 'Calle 56 no 12', 'CO', '22', '717', 3456778956, 'jazmin_benavides@gmail.com', '1', 2, '10eaa2f227f8ef249c742bc00d6624b0', '0', 23, '', '', '', '', '', '', '2021-01-22', 0, ''),
(6, '1', 2141601112, 'Maria Martinez', 'Calle 20 20', 'CO', '22', '717', 320445566, 'maria_martinez@gmail.com', '1', 2, '10eaa2f227f8ef249c742bc00d6624b0', '0', 34, '', '', '', '', '', '', '2021-01-25', 0, ''),
(9, '1', 123145646, 'Docente Prueba 1', '', NULL, NULL, NULL, 3255689454, 'docPrueba@aunaredu.co', 'Fotografía docente ejemplo.png', 3, '10eaa2f227f8ef249c742bc00d6624b0', '0', 35, 'Administrador de Empresas', 'Gerencia', 'Proyectos', 'Administración', 'Perfil Administrador de Empresas', 'Ipiales', '2021-06-29', 0, ''),
(10, '1', 1234567, 'Docente Prueba 2', '', NULL, NULL, NULL, 31632589996, 'docPrueba2@aunaredu.co', 'Docentefoto.png', 3, '10eaa2f227f8ef249c742bc00d6624b0', '0', 30, 'Ingeniero de Sistemas', 'Machine Learning</p>Big Data', 'Inteligencia Artificial', 'Data Science', 'El ingeniero de sistemas, como ciudadano ético, brinda soluciones pertinentes a problemas en el contexto social con base en sus sólidos conocimientos en arquitectura y desarrollo de software y bases de datos.', 'Ipiales', '2021-06-24', 0, ''),
(12, '1', 1085322516, 'Cristian  David Enriquez Acosta', 'Calle 17 A # 8-E 21', 'CO', '22', '717', 3163228112, 'cristianenterprise04@gmail.com', '1', 1, '10eaa2f227f8ef249c742bc00d6624b0', '0', 25, '', '', '', '', '', '', '2021-01-07', 2, 'Contaduría pública'),
(16, '1', 1085322517, 'Cristian  David Enriquez Acosta', 'Calle 17 A # 8-E 21', 'CO', '22', '717', 3163228112, 'cristianenterprise04@gmail.com', '1', 3, '10eaa2f227f8ef249c742bc00d6624b0', '0', 25, '', '', '', '', '', '', '2021-01-07', 2, 'Contaduría pública');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `banco_preguntas`
--
ALTER TABLE `banco_preguntas`
  ADD PRIMARY KEY (`CodBanc`);

--
-- Indices de la tabla `carreras`
--
ALTER TABLE `carreras`
  ADD PRIMARY KEY (`CodiCarr`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`Codigo`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`CodiCurs`);

--
-- Indices de la tabla `departamento`
--
ALTER TABLE `departamento`
  ADD PRIMARY KEY (`cod_dep`);

--
-- Indices de la tabla `insccarr`
--
ALTER TABLE `insccarr`
  ADD PRIMARY KEY (`CodiInsc`);

--
-- Indices de la tabla `insccurs`
--
ALTER TABLE `insccurs`
  ADD PRIMARY KEY (`CodiInsc`);

--
-- Indices de la tabla `inscmat`
--
ALTER TABLE `inscmat`
  ADD PRIMARY KEY (`CodiInsc`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`Codigo`);

--
-- Indices de la tabla `matricula`
--
ALTER TABLE `matricula`
  ADD PRIMARY KEY (`CodiMatr`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`cod_mun`);

--
-- Indices de la tabla `nivelacion`
--
ALTER TABLE `nivelacion`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`cod_pai`);

--
-- Indices de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indices de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indices de la tabla `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indices de la tabla `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indices de la tabla `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indices de la tabla `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indices de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indices de la tabla `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indices de la tabla `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indices de la tabla `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indices de la tabla `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indices de la tabla `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- Indices de la tabla `programas`
--
ALTER TABLE `programas`
  ADD PRIMARY KEY (`Codigo`);

--
-- Indices de la tabla `sub_conte`
--
ALTER TABLE `sub_conte`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `temas_cursos`
--
ALTER TABLE `temas_cursos`
  ADD PRIMARY KEY (`Orden`);

--
-- Indices de la tabla `temas_materias`
--
ALTER TABLE `temas_materias`
  ADD PRIMARY KEY (`Orden`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`Cont`),
  ADD UNIQUE KEY `Cont` (`Cont`);

--
-- Indices de la tabla `tipoinsc`
--
ALTER TABLE `tipoinsc`
  ADD PRIMARY KEY (`CodiTipo`);

--
-- Indices de la tabla `tipousua`
--
ALTER TABLE `tipousua`
  ADD PRIMARY KEY (`CodiUsua`);

--
-- Indices de la tabla `unidades`
--
ALTER TABLE `unidades`
  ADD PRIMARY KEY (`CodiUnid`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`CodiUsua`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banco_preguntas`
--
ALTER TABLE `banco_preguntas`
  MODIFY `CodBanc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `carreras`
--
ALTER TABLE `carreras`
  MODIFY `CodiCarr` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `Codigo` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `CodiCurs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `departamento`
--
ALTER TABLE `departamento`
  MODIFY `cod_dep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `insccarr`
--
ALTER TABLE `insccarr`
  MODIFY `CodiInsc` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `insccurs`
--
ALTER TABLE `insccurs`
  MODIFY `CodiInsc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `inscmat`
--
ALTER TABLE `inscmat`
  MODIFY `CodiInsc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `Codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `matricula`
--
ALTER TABLE `matricula`
  MODIFY `CodiMatr` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `municipios`
--
ALTER TABLE `municipios`
  MODIFY `cod_mun` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1124;

--
-- AUTO_INCREMENT de la tabla `nivelacion`
--
ALTER TABLE `nivelacion`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `cod_pai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=237;

--
-- AUTO_INCREMENT de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `programas`
--
ALTER TABLE `programas`
  MODIFY `Codigo` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `sub_conte`
--
ALTER TABLE `sub_conte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `temas_cursos`
--
ALTER TABLE `temas_cursos`
  MODIFY `Orden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `temas_materias`
--
ALTER TABLE `temas_materias`
  MODIFY `Orden` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=230;

--
-- AUTO_INCREMENT de la tabla `tienda`
--
ALTER TABLE `tienda`
  MODIFY `Cont` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tipoinsc`
--
ALTER TABLE `tipoinsc`
  MODIFY `CodiTipo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipousua`
--
ALTER TABLE `tipousua`
  MODIFY `CodiUsua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `unidades`
--
ALTER TABLE `unidades`
  MODIFY `CodiUnid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `CodiUsua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
