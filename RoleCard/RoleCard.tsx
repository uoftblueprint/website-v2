import React from 'react';
import { Card, Image, Text, Button, Center, Anchor } from '@mantine/core';
import "./RoleCard.css"

export default function RoleCard({ role, link}){
  return (
      // <Card className='roleCard' shadow="lg" radius="xl" p="xl" style={{ width: 'calc(33.333% - 20px)', marginBottom: '20px' }}>
      <Card className='roleCard' shadow="lg" radius="xl" p="xl">
        <Center>
          <Image src="/monitor.svg" />
        </Center>
        <Center my="xs">
          <Text c="#0078E8" fw={500} className='roleTitle'>
            {role}
          </Text>
        </Center>
        <Center>
          <Anchor href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="filled" radius="xl">
              Apply
            </Button>
          </Anchor>
        </Center>
      </Card>
  );
};

