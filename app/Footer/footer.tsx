"use client";

import {
    Box,
    Container,
    Group,
    Text,
    ActionIcon,
    Divider,
} from "@mantine/core";

import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconPhone,
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <Box
            // mt={80}
            style={{
                background: "#020617",
                color: "#fff",
                padding: "40px 0 20px",
            }}
        >
            <Container size="lg">
                {/* Top Section */}
                <Group justify="space-between" align="flex-start" wrap="wrap">

                    {/* Left */}
                    <Box>
                        <Text
                            fw={900}
                            size="lg"
                            style={{
                                background: "linear-gradient(90deg, #00d9ff, #8400ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Rahul Swami
                        </Text>

                        <Divider
                            my="sm"
                            style={{
                                borderColor: "#ff0000",
                                width: "60%",
                            }}
                        />

                        <Text
                            c="dimmed"
                            mt="sm"
                            maw={300}
                            style={{
                                lineHeight: 1.6,
                                fontSize: "14px",
                            }}
                        >
                            Full Stack Developer building modern and scalable web
                            applications with clean UI and strong backend.
                        </Text>
                    </Box>

                    {/* Links */}
                    <Box mt="lg">
                        <Text fw={900} mb="sm" c="red" >

                            Quick Links
                            <Divider my="lg" />
                        </Text>

                        {[
                            { name: "Password", link: "https://prince-pardhan.github.io/new-repo/", color: "#22c55e" },
                            { name: "AI", link: "https://voice-mind-ai.vercel.app/", color: "#06b6d4" },
                            { name: "Green-Farma", link: "https://prince-pardhan.github.io/farming/", color: "#84cc16" },
                            { name: "Flamtun", link: "https://flamtun.vercel.app/", color: "#f97316" },
                            { name: "Rahul", link: "https://rkswami.vercel.app/", color: "#a855f7" },
                            { name: "Ramesh", link: "https://prince-pardhan.github.io/rameshkumar/", color: "#ec4899" },
                        ].map((item, index) => (
                            <a key={index} href={item.link} target="_blank" style={{ textDecoration: "none" }}>
                                <Text
                                    mt={6}
                                    style={{
                                        color: item.color,
                                        transition: "all 0.3s ease",
                                        fontWeight: 500,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateX(6px)";
                                        e.currentTarget.style.textShadow = `0 0 8px ${item.color}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateX(0)";
                                        e.currentTarget.style.textShadow = "none";
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </a>
                        ))}
                    </Box>

                    {/* Contact + Social */}
                    <Box>
                        <Text fw={600} mb="sm">
                            Connect With Me
                            <Divider my="lg" />
                        </Text>

                        <Group mt="xs">

                            {/* Phone */}
                            <ActionIcon
                                component="a"
                                href="tel:+918290400325"
                                variant="outline"
                                color="cyan"
                                radius="xl"
                            >
                                <IconPhone size={18} />
                            </ActionIcon>

                            {/* WhatsApp */}
                            <ActionIcon
                                component="a"
                                href="https://wa.me/918290400325"
                                target="_blank"
                                variant="outline"
                                color="green"
                                radius="xl"
                            >
                                <IconBrandWhatsapp size={18} />
                            </ActionIcon>

                            {/* GitHub */}
                            <ActionIcon
                                component="a"
                                href="https://github.com/prince-pardhan"
                                target="_blank"
                                variant="outline"
                                color="gray"
                                radius="xl"
                            >
                                <IconBrandGithub size={18} />
                            </ActionIcon>

                            {/* LinkedIn */}
                            <ActionIcon
                                component="a"
                                href="https://www.linkedin.com/in/rk-swami-b63251379/"
                                target="_blank"
                                variant="outline"
                                color="blue"
                                radius="xl"
                            >
                                <IconBrandLinkedin size={18} />
                            </ActionIcon>

                            {/* Instagram */}
                            <ActionIcon
                                component="a"
                                href="https://www.instagram.com/prince_pardhan_325/?hl=en"
                                target="_blank"
                                variant="outline"
                                color="pink"
                                radius="xl"
                            >
                                <IconBrandInstagram size={18} />
                            </ActionIcon>

                            {/* Facebook */}
                            <ActionIcon
                                component="a"
                                href="https://www.facebook.com/profile.php?id=61553299053689"
                                target="_blank"
                                variant="outline"
                                color="indigo"
                                radius="xl"
                            >
                                <IconBrandFacebook size={18} />
                            </ActionIcon>

                            {/* Twitter */}
                            <ActionIcon
                                component="a"
                                href="https://x.com/Rkswami001"
                                target="_blank"
                                variant="outline"
                                color="cyan"
                                radius="xl"
                            >
                                <IconBrandTwitter size={18} />
                            </ActionIcon>

                        </Group>
                    </Box>
                </Group>

                <Divider my="lg" />

                {/* Bottom */}
                <Group justify="space-between" wrap="wrap">
                    <Text c="dimmed" size="sm">
                        © {new Date().getFullYear()} Rahul Swami.
                    </Text>


                </Group>
            </Container>

            {/* Hover Style */}
            <style jsx>{`
        .footer-link {
          cursor: pointer;
          color: #9ca3af;
          margin-bottom: 6px;
          transition: 0.3s;
        }

        .footer-link:hover {
          color: #22d3ee;
        }
      `}</style>
        </Box>
    );
}