"use client";

import {
  Box,
  Card,
  Image,
  Avatar,
  Text,
  Badge,
  Button,
  Group,
  Stack,
  ActionIcon,
  SimpleGrid,
} from "@mantine/core";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconPhone,
} from "@tabler/icons-react";

const profiles = [
  {
    name: "Rahul swami",
    role: "Founder",
    avatar: "ra.jpeg",
    cover: "ra.jpeg",
    description:
      "Founder with a passion for building innovative digital solutions and scalable software products. Experienced in Full Stack Development, leading teams, and turning ideas into successful businesses.",
    youtubeVideo:
      "https://www.youtube.com/embed/MohIy1Mt1OM?rel=0",
    phone: "tel:+918290400325",

    facebook: "https://www.facebook.com/profile.php?id=61553299053689",
    instagram: "https://www.instagram.com/haryanvi_music_24/?hl=en",
    linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/918290400325",
    youtube: "https://www.youtube.com/@RkWriter001",
  },
  {
    name: "Arjun kumar",
    role: "CEO",
    avatar: "/arjun.jpeg",
    cover: "/arjun.jpeg",
    description:
      "Visionary CEO focused on driving business growth, innovation, and strategic leadership. Passionate about building successful organizations and delivering exceptional value to clients.",

 youtubeVideo:
      "https://www.youtube.com/embed/MohIy1Mt1OM?rel=0",
    facebook: "https://www.facebook.com/profile.php?id=61553299053689",
    instagram: "https://www.instagram.com/gaama_aale_705/?hl=en",
    // linkedin: "https://linkedin.com/",
    whatsapp: "https://wa.me/917742996908",
    phone: "tel:+917742996908",
    youtube: "https://www.youtube.com/@RkWriter001",
  },
];

export default function Portfolio() {
  return (
    <Box
      py={50}
      px={20}
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#111827)",
      }}
    >


      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        {profiles.map((profile, index) => (
          <Card
            key={index}
            radius="xl"
            shadow="xl"
            p={0}
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              overflow: "hidden",
            }}
          >
            {/* Cover */}
            <Card.Section>
              <Image
                src={profile.cover}
                h={70}
                alt={profile.name}
              />
            </Card.Section>

            {/* Avatar */}
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: -50,
              }}
            >
              <Avatar
                src={profile.avatar}
                size={200}
                radius="xl"
                style={{
                  border: "5px solid #1e293b",
                }}
              />
            </Box>

            {/* Content */}
            <Stack align="center" gap="sm" p="lg">
              <Text c="white" fw={700} size="xl">
                {profile.name}
              </Text>

              <Badge color="red" size="lg">
                {profile.role}
              </Badge>

              <Text
                ta="center"
                c="#5a8bc6"
                size="sm"
                fw={700}
              >
                {profile.description}
              </Text>

              {/* Contact Button */}
              <Button
                component="a"
                href={profile.phone}

                radius="xl"
                color="cyan"
                leftSection={<IconPhone size={28} />}
                mt="xs"
              >
                Contact Me
              </Button>

              {/* Social Links */}
              <Group mt="md" gap="md">
                <ActionIcon
                  component="a"
                  href={profile.facebook}
                  target="_blank"
                  size="xl"
                  radius="xl"
                  variant="filled"
                  color="blue"
                >
                  <IconBrandFacebook size={20} />
                </ActionIcon>

                <ActionIcon
                  component="a"
                  href={profile.instagram}
                  target="_blank"
                  size="xl"
                  radius="xl"
                  variant="filled"
                  color="pink"
                >
                  <IconBrandInstagram size={20} />
                </ActionIcon>

                <ActionIcon
                  component="a"
                  href={profile.linkedin}
                  target="_blank"
                  size="xl"
                  radius="xl"
                  variant="filled"
                  color="indigo"
                >
                  <IconBrandLinkedin size={20} />
                </ActionIcon>

                <ActionIcon
                  component="a"
                  href={profile.whatsapp}
                  target="_blank"
                  size="xl"
                  radius="xl"
                  variant="filled"
                  color="green"
                >
                  <IconBrandWhatsapp size={20} />
                </ActionIcon>

                <ActionIcon
                  component="a"
                  href={profile.youtube}
                  target="_blank"
                  size="xl"
                  radius="xl"
                  variant="filled"
                  color="red"
                >
                  <IconBrandYoutube size={20} />
                </ActionIcon>
              </Group>
              <iframe
                width="100%"
                height="220"
                src={profile.youtubeVideo}
                title={profile.name}
                allowFullScreen
                style={{
                  border: "none",
                  borderRadius: 12,
                }}
              />
              {/* Stats */}
              <Group
                justify="space-between"
                w="100%"
                mt="lg"
              >



              </Group>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}