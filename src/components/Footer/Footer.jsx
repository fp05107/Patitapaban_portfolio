import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import React from "react";
import cv from "../../Assets/PatitaPaban_Updated_CV.pdf";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  SiGmail,
  SiGithub,
  SiHackerrank,
  SiLinkedin,
  SiLeetcode,
} from "react-icons/si";
import { motion } from "framer-motion";
import { footerVariants } from "../utility/Component/motion";
export const Footer = () => {
  return (
    <Box position={"relative"} h="max-content" py="20px" pb="120px">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <Flex
          justify={"center"}
          align="center"
          px="10px"
          color={"whiteAlpha.900"}
        >
          <Link href="#" fontSize={"28px"}>
            Home
          </Link>
        </Flex>
        <Flex
          flexDir={["row", "column"]}
          justify={["space-between", "center"]}
          align={"center"}
          px="20px"
          py="20px"
          gap="20px"
        >
          <Flex
            flexDir={["column", "row"]}
            gap="20px"
            px="10px"
            color={"whiteAlpha.900"}
          >
            <Link href="#about">About</Link>
            <Link href="#skill">Skill</Link>
            <Link href="#project">Project</Link>
            <Link href="#contact">Contact</Link>
            <Link href={cv} download>
              Resume
            </Link>
          </Flex>

          <Flex
            flexDir={["column", "row"]}
            gap={"20px"}
            px="10px"
            color={"whiteAlpha.900"}
          >
            <Link href="https://wa.me/919776631998" target={"_blank"}>
              <HStack>
                <FaWhatsapp />
                <Box>
                  <span>+91</span> 9776631998
                </Box>
              </HStack>
            </Link>
            <Link href="tel:+919776631998" target={"_blank"}>
              <HStack>
                <FaPhoneAlt />
                <Box>
                  <span>+91</span> 9776631998
                </Box>
              </HStack>
            </Link>
            <Link href="mailto:sarojpahi@gmail.com" target={"_blank"}>
              <HStack>
                <SiGmail />
                <Box>patitapabandash068@gmail.com</Box>
              </HStack>
            </Link>
          </Flex>
        </Flex>
        <Flex
          justify={"center"}
          align="center"
          gap={"25px"}
          pb="20px"
          color={"whiteAlpha.900"}
        >
          {/* <Link
            fontSize={"3xl"}
            href="https://github.com/sarojpahi"
            target={"_blank"}
          >
            <SiGithub />
          </Link>
          <Link
            fontSize={"3xl"}
            href="https://leetcode.com/sarojpahi/"
            target={"_blank"}
          >
            <SiLeetcode />
          </Link>
          <Link
            fontSize={"3xl"}
            href="https://www.hackerrank.com/sarojpahi"
            target={"_blank"}
          >
            <SiHackerrank />
          </Link> */}
          <Link
            fontSize={"3xl"}
            href="https://www.linkedin.com/in/subham-sahoo-37089222b/"
            target={"_blank"}
          >
            <SiLinkedin />
          </Link>
        </Flex>
        <Box color={"gray.500"} textAlign="center">
          &copy; Patitapaban Dash
        </Box>
      </motion.div>
    </Box>
  );
};
