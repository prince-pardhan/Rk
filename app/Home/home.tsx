"use client";

import {
    Container,
    Group,
    Text,
    Button,
    Title,
    Box,
    ActionIcon,
} from "@mantine/core";
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconPhone,
} from "@tabler/icons-react";
// const menuItems = ["Home", "About", "Skills", "Portfolio", "Contact"];
export default function Portfolio() {
    return (
        <Box
            style={{
                minHeight: "100vh",
                background: "radial-gradient(circle at top, #0f172a, #020617)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Container
                size="lg"
                style={{
                    background: "#111827",
                    borderRadius: "20px",
                    padding: "40px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
            >
                {/* Navbar */}


                {/* Hero */}
                <Group justify="space-between" align="center">
                    {/* LEFT */}
                    <Box style={{ maxWidth: "900px" }}>


                        <Title
                            order={1}
                            style={{
                                fontSize: "48px",
                                fontWeight: 600,
                                lineHeight: 1.1,
                                background:
                                    "linear-gradient(90deg, #0022ff 0%, #ff0000 40%, #00ff15 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 5px 25px rgba(59,130,246,0.25)",
                                letterSpacing: "1px",
                            }}
                        >
                            Rahul Swami
                        </Title>

                        <Text mt="sm">

                            <span style={{ color: "#22d3ee", fontWeight: 600 }} >
                                Full stak Developer
                            </span>
                        </Text>

                        <Text c="dimmed" mt="md">
                            Hello, I'm Rahul Swami, a passionate  <br /> and dedicated Full Stack Developer.
                            I specialize <br /> in building modern, responsive, and scalable web
                            applications using the latest technologies.
                        </Text> <br />
                        <Button
                            size="lg"
                            radius="xl"
                            variant="filled"
                            styles={{
                                root: {
                                    // background:
                                    //     "linear-gradient(135deg, #06b6d4 0%, #3b82f6 45%, #8b5cf6 100%)",
                                    color: "white",
                                    fontWeight: 900,
                                    letterSpacing: "0.5px",
                                    paddingInline: "20px",
                                    height: "30px",
                                   
                                },
                            }}
                        >
                            3 Months Experience
                        </Button>
                        {/* Social Icons */}
                        <Group mt="md">
                            {/* Call Button */}
                            <ActionIcon
                                variant="outline"
                                radius="xl"
                                color="cyan"
                                component="a"
                                href="tel:+918290400325"
                            >
                                <IconPhone size={18} />
                            </ActionIcon>

                            {/* WhatsApp Button */}
                            <ActionIcon
                                variant="outline"
                                radius="xl"
                                color="cyan"
                                component="a"
                                href="https://wa.me/918290400325"
                                target="_blank"
                            >
                                <IconBrandWhatsapp size={18} />
                            </ActionIcon>
                        </Group>
                        <a href="https://www.youtube.com/@RkWriter001" target="_blank">
                            <Button mt="xl" radius="xl" color="cyan" >
                                Youtube
                            </Button>
                        </a>
                    </Box>

                    {/* RIGHT - HEXAGON IMAGE */}
                    <Box
                        style={{
                            position: "relative",
                            width: "300px",
                            height: "300px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Glow */}
                        <Box
                            style={{
                                position: "absolute",
                                width: "320px",
                                height: "320px",
                                background: "#22d3ee",
                                filter: "blur(60px)",
                                opacity: 0.5,
                                borderRadius: "20px",
                            }}
                        />

                        {/* Hexagon */}
                        <Box
                            style={{
                                width: "260px",
                                height: "300px",
                                background: "#00ddff",
                                clipPath:
                                    "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                                padding: "5px",
                            }}
                        >
                            <Box
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    background: "#111827",
                                    clipPath:
                                        "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="/i.png"
                                    alt="profile"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Group>
            </Container>
        </Box>
    );
}