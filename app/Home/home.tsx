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
const menuItems = ["Home", "About", "Skills", "Portfolio", "Contact"];
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
                <Box
                    style={{
                        padding: "12px 24px",
                        borderRadius: "12px",
                        background: "#0f172a",
                        border: "1px solid rgba(255,255,255,0.1)",
                        width: "fit-content",
                    }}
                >
                    <Group gap="lg">
                        {menuItems.map((item, index) => (
                            <Text
                                key={index}
                                style={{
                                    cursor: "pointer",
                                    color: index === 0 ? "#22d3ee" : "#9ca3af",
                                    transition: "0.3s",
                                }}
                                className="menu-item"
                            >
                                {item}
                            </Text>
                        ))}
                    </Group>

                    {/* Hover Style */}
                    <style jsx>{`
        .menu-item:hover {
          color: #22d3ee;
        }
      `}</style>
                </Box>

                {/* Hero */}
                <Group justify="space-between" align="center">
                    {/* LEFT */}
                    <Box style={{ maxWidth: "500px" }}>


                        <Title size={40} fw={700} c="white">
                            Rahul swami
                        </Title>

                        <Text mt="sm">

                            <span style={{ color: "#22d3ee", fontWeight: 600 }} >
                                Full stak Developer
                            </span>
                        </Text>

                        <Text c="dimmed" mt="md">
                            Hello, I'm Rahul Swami, a passionate and dedicated Full Stack Developer.
                            I specialize in building modern, responsive, and scalable web
                            applications using the latest technologies.
                        </Text>

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
                                background: "#22d3ee",
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
                                    src="/v.jpeg"
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