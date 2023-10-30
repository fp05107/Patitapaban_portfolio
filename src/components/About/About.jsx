import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./About.css";
import me from "../../Assets/nana.jpg";
import { motion } from "framer-motion";
import { slideVariants, textVariant } from "../utility/Component/motion";
export const About = () => {
  return (
    <section id="about">
      <Box
        position={"relative"}
        bgSize={["auto 100%", "100% 100%"]}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        h="max-content"
        overflow={"hidden"}
      >
        <motion.div>
          <VStack align={"center"} justify={"center"} py="20px">
            <motion.div
              variants={textVariant(0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <Heading
                color={"#00ccff"}
                textDecoration="underline"
                textUnderlineOffset={"5px"}
              >
                About Me
              </Heading>
            </motion.div>
          </VStack>
          <Flex
            w="100%"
            align={"center"}
            justify={[
              "center",
              "center",
              "space-around",
              "space-around",
              "center",
              "center",
            ]}
            flexDirection={[
              "column-reverse",
              "column-reverse",
              "row",
              "row",
              "row",
              "row",
            ]}
            gap="20px"
          >
            <VStack
              px="15px"
              color="white"
              w={["100%", "100%", "100%", "50%", "60%", "70%"]}
            >
              <motion.div
                variants={slideVariants("left")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true }}
              >
                <Box className="aboutSub">
                  <Text className="aboutSub" w="95%" fontSize={["", "19px"]}>
                    I am a highly skilled Application Support Engineer with
                    expertise in Oracle, Unix, scripting, and various tools. I
                    excel in maintaining critical systems, ensuring secure
                    connectivity, and generating performance reports. My role in
                    supporting file transfer applications and data processing,
                    along with my experience in job scheduling and data mapping,
                    showcases my comprehensive technical capabilities. I have
                    contributed to critical projects and am a valuable asset for
                    any organization seeking a dedicated and versatile technical
                    professional.
                  </Text>
                  <Text
                    className="aboutSub"
                    w="95%"
                    mt={"2px"}
                    fontSize={["", "19px"]}
                  >
                    I’m quite proficient in collaboration, and decision-making
                    and always accountable for my decisions. Seeking to work in
                    an environment that can encourage me to succeed both
                    personally and professionally and where I can utilize my
                    skills and Knowledge not only for my growth but also for the
                    people around me.
                  </Text>
                </Box>
              </motion.div>
            </VStack>

            <VStack width={["100%", "300px"]} mr="10px" mb="20px">
              <Box>
                <motion.div
                  variants={slideVariants("right")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
                >
                  <Flex justify={"center"} align="center" className="box">
                    <span>
                      <img style={{marginTop: 5}} src={me} alt="me" />
                    </span>
                  </Flex>
                </motion.div>
              </Box>
            </VStack>
          </Flex>
        </motion.div>
      </Box>
    </section>
  );
};
