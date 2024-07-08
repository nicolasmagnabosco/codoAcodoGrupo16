-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-nickam.alwaysdata.net
-- Generation Time: Jul 08, 2024 at 02:33 PM
-- Server version: 10.11.8-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nickam_code_academy`
--

-- --------------------------------------------------------

--
-- Table structure for table `cursos`
--

CREATE TABLE `cursos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` text NOT NULL,
  `nivel` text NOT NULL,
  `precio` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `nivel`, `precio`) VALUES
(1, 'introduccion', 'inicial', 100),
(2, 'javascript', 'inicial', 100),
(3, 'javascript', 'intermedio', 180),
(4, 'python', 'inicial', 100),
(5, 'python', 'intermedio', 180),
(6, 'diseño', 'inicial', 100),
(7, 'diseño', 'intermedio', 180),
(8, 'diseño', 'avanzado', 220);

-- --------------------------------------------------------

--
-- Table structure for table `ofertas`
--

CREATE TABLE `ofertas` (
  `id` int(100) UNSIGNED NOT NULL,
  `curso_id` int(100) UNSIGNED NOT NULL,
  `precio` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resenas`
--

CREATE TABLE `resenas` (
  `id` int(100) UNSIGNED NOT NULL,
  `usuario_id` varchar(100) NOT NULL,
  `curso_id` int(10) UNSIGNED NOT NULL,
  `calificacion` int(2) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resenas`
--

INSERT INTO `resenas` (`id`, `usuario_id`, `curso_id`, `calificacion`, `descripcion`, `fecha`, `hora`) VALUES
(1, '5412a0aa-92f2-424b-9de6-4b8127abd29f', 5, 10, 'me encantó', '2024-07-08', '00:54:57'),
(2, '5412a0aa-92f2-424b-9de6-4b8127abd29f', 4, 0, 'epaa', '0000-00-00', '00:00:00'),
(3, '5412a0aa-92f2-424b-9de6-4b8127abd29f', 4, 7, 'no me gustó', '0000-00-00', '00:00:00'),
(4, '5412a0aa-92f2-424b-9de6-4b8127abd29f', 2, 2, 'null', '0000-00-00', '00:00:00'),
(5, '05da6078-0867-4c84-8bcb-90bed8eb8972', 3, 8, 'muy malo', '0000-00-00', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contraseña`) VALUES
('05da6078-0867-4c84-8bcb-90bed8eb8972', 'paquito@gmail.com', '$2b$08$GIODZym7.sUffnHMVe8MUe2CpBUZDtoc4/0SEOpKMbgh/dA2/jsVm'),
('5412a0aa-92f2-424b-9de6-4b8127abd29f', 'juancarlos@gmail.com', '$2b$08$..x4lkOmmLSHkDLVDeXBSOgE0VeFiwimudlb.lh6nShmqayPDRCDm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso_id` (`curso_id`);

--
-- Indexes for table `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso_id` (`curso_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(100) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ofertas`
--
ALTER TABLE `ofertas`
  ADD CONSTRAINT `ofertas_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`);

--
-- Constraints for table `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `resenas_ibfk_1` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  ADD CONSTRAINT `resenas_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
