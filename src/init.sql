--
-- Table structure for table `todo`
--
CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `isCompleted` boolean NOT NULL DEFAULT false,
  `createdAt` datetime DEFAULT now(),
  `updatedAt` datetime DEFAULT now(),
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `todo_id` int(11) NOT NULL,
  `tags` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `todo_id` int(11) NOT NULL,
  `contents` varchar(200) DEFAULT NULL,
  `createdAt` datetime DEFAULT now(),
  `updatedAt` datetime DEFAULT now(),
  PRIMARY KEY (`id`)
);