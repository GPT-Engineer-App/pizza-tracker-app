import React from "react";
import { ChakraProvider, Box, VStack, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Badge } from "@chakra-ui/react";
import { FaPizzaSlice } from "react-icons/fa";

const Index = () => {
  // Dummy data para simular pedidos
  const orders = [
    {
      id: 1,
      customer: "Juan Pérez",
      status: "preparing", // preparing, en-route, delivered
    },
    {
      id: 2,
      customer: "Ana Gómez",
      status: "en-route",
    },
    {
      id: 3,
      customer: "Mario Bros",
      status: "delivered",
    },
  ];

  // Obtener el color del badge según el estado del pedido
  const getStatusColor = (status) => {
    switch (status) {
      case "preparing":
        return "yellow";
      case "en-route":
        return "blue";
      case "delivered":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <VStack spacing={8}>
          <Heading as="h1" size="xl">
            Seguimiento de Pedidos de Pizza <FaPizzaSlice />
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Cliente</Th>
                <Th>Estado</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.customer}</Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(order.status)}>{order.status}</Badge>
                  </Td>
                  <Td>
                    <Button colorScheme="blue" size="sm">
                      Detalles
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
