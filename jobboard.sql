-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 03 فبراير 2022 الساعة 16:40
-- إصدار الخادم: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobboard`
--

-- --------------------------------------------------------

--
-- بنية الجدول `ads`
--

CREATE TABLE `ads` (
  `adsID` int(11) NOT NULL,
  `AdsName` varchar(50) NOT NULL,
  `dateAdd` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- بنية الجدول `firms`
--

CREATE TABLE `firms` (
  `companyID` int(11) NOT NULL,
  `CompanyName` varchar(50) NOT NULL,
  `dateAdd` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- بنية الجدول `jobs`
--

CREATE TABLE `jobs` (
  `jobs_id` int(11) NOT NULL,
  `job_name` varchar(50) NOT NULL,
  `job_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- بنية الجدول `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `FllName` varchar(50) NOT NULL,
  `dateAdd` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ads`
--
ALTER TABLE `ads`
  ADD PRIMARY KEY (`adsID`),
  ADD UNIQUE KEY `AdsName` (`AdsName`),
  ADD KEY `AdsName_2` (`AdsName`);

--
-- Indexes for table `firms`
--
ALTER TABLE `firms`
  ADD PRIMARY KEY (`companyID`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`jobs_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ads`
--
ALTER TABLE `ads`
  MODIFY `adsID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `firms`
--
ALTER TABLE `firms`
  MODIFY `companyID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `jobs_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/* الاستعلامات الكيووري هي بشكل عام عبارة عن الوصول الى البيانات المخزنة
  في قاعدة البيانات وعرضها بنفس الوقت, مثال على ذلك
 */

SELECT * FROM `users`
/**
*! * هذا الاستعلام يقوم بعرض كل البيانات المخنة داخل هذا الجدول
*/

-- ! القيمة الراجعة من الاستعلام اما 1 او 0 
-- ! اذا كان 1 يعني ان البيانات المطلوبة بالفعل موجودة
-- ! واذا كانت 0 يعني البيانات غير موجودة 


-- ! هناك العديد من الطرق او الاساليب للاستعلام عن بيانات معينة

SELECT COUNT(`UserID`) FROM `users`;
-- هذا الاستعلام يعرض عدد المستخدمين

-- ! لمعرفة بيانات متعلقة بصف معين
SELECT * FROM `users` WHERE `FullName` = `khalifa alqiadi`;
SELECT * FROM `users` WHERE `UserID` = 3;
SELECT * FROM `users` WHERE `Age` > 26 ORDER BY `UserID` DESC;

-- ! لمعرف بيانات من جدول معين وهذا الجدول معه علاقة بجدول اخر
SELECT 
      `jobs.*`,
      `firms.CompanyName`
  FROM 
      `jobs`
  INNER JOIN
      `firms`
  ON
      `firms.CompanyID` = `jobs.compID`
  WHERE `jobs_id`= 5;


  select `emp_name` from `Employee` where `salary`>10000;

  