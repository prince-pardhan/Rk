"use client";

import {
  Box,
  Text,
  Progress,
  Grid,
  Container,
  Title,
  RingProgress,
  Center,
  Stack,
  Group,
  Paper,
  Badge,
  Button,
} from "@mantine/core";

const skillCategories = [
  {
    title: "Frontend",
    color: "cyan",
    skills: [
      { name: "React.js", value: 90 },
      { name: "Next.js", value: 88 },
      { name: "TypeScript", value: 85 },
    ],
  },
  {
    title: "Backend",
    color: "green",
    skills: [
      { name: "Node.js", value: 88 },
      { name: "Express", value: 85 },
      { name: "API Dev", value: 90 },
    ],
  },
  {
    title: "Database",
    color: "yellow",
    skills: [{ name: "MongoDB", value: 85 }],
  },
];

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JAVASCRIPT" },
  { name: "REACT" },
  { name: "NEXT JS" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "API Dev" },
  { name: "MongoDB" },
  { name: "Python" },
  { name: "Git & GitHub" },
  { name: "TypeScript" },
];

// 🔥 FIX: better graph values (auto avg)
const circleData = skillCategories.map((cat) => {
  const avg =
    cat.skills.reduce((acc, s) => acc + s.value, 0) / cat.skills.length;

  return {
    value: avg,
    color: cat.color,
    label: cat.title,
  };
});

export default function SkillsSection() {
  return (
    <Box
      style={{
        background: "radial-gradient(circle at top,#0f172a,#020617)",
        padding: "60px 15px", // 🔥 mobile friendly padding
        color: "white",
      }}
    >
      <Container size="lg">



        <Grid >

          {/* 🔹 LEFT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">

              {skillCategories.map((cat, i) => (
                <Paper
                  key={i}
                  p="md"
                  radius="lg"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Group mb="sm">
                    <Badge color={cat.color} variant="light">
                      {cat.title}
                    </Badge>
                  </Group>

                  <Stack gap="sm">
                    {cat.skills.map((skill, j) => (
                      <Box key={j}>
                        <Group justify="space-between">
                          <Text size="sm">{skill.name}</Text>
                          <Text size="xs" c="dimmed">
                            {skill.value}%
                          </Text>
                        </Group>

                        <Progress
                          value={skill.value}
                          radius="xl"
                          size="md"
                          color={cat.color}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              ))}

              {/* 🔥 Tags */}
              <Paper
                p="md"
                radius="lg"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 border border-slate-700 bg-[#161b29] text-slate-400 text-xs 
                      hover:border-cyan-400 hover:text-cyan-300 transition-all"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </Paper>

            </Stack>
          </Grid.Col>

          {/* 🔥 RIGHT */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Center>
              <Box
                style={{
                  padding: "20px", // 🔥 mobile reduce
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                <RingProgress
                  size={210} // 🔥 mobile friendly
                  thickness={22}
                  roundCaps
                  sections={circleData}
                  label={
                    <Center>
                      <Text fw={900} size="sm">
                        Skills
                      </Text>
                    </Center>
                  }
                />

                {/* Legend */}
                <Stack mt="md" gap={4}>
                  {circleData.map((item, i) => (
                    <Group key={i} gap={6}>
                      <Box
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "60%",
                          background: item.color,
                        }}
                      />
                      <Text size="xs">
                        {item.label} ({Math.round(item.value)}%)
                      </Text>

                    </Group>
                  ))}
                </Stack>
                <Stack align="center" mb={50}>
                  <Title
                    order={1}
                    style={{
                      fontSize: "42px",
                      fontWeight: 900,
                      textAlign: "center",
                      background:
                        "linear-gradient(90deg,#22d3ee,#4ade80,#facc15)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Experience
                  </Title>

                  <Text c="dimmed" ta="center" maw={700}>
                    Full Stack Developer with strong experience in frontend,
                    backend, API development, and scalable database systems.
                    Worked on backend development for ShikshaPay and Green-Farma.
                  </Text>
                </Stack>
                <Button
                  size="md"
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: "cyan", to: "lime", deg: 90 }}
                  styles={{
                    root: {
                      fontWeight: 700,
                      paddingInline: "22px",
                      height: "48px",
                      boxShadow: "0 8px 25px rgba(34,211,238,0.35)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      transition: "all 0.3s ease",
                    },
                  }}
                  className="hover:scale-105"
                >
                  3 Months Experience
                </Button>
              </Box>
            </Center>
          </Grid.Col>

        </Grid>
      </Container>
    </Box>
  );
}