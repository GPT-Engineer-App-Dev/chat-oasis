import { Box, Flex, VStack, Input, Button, Textarea, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex height="100vh">
      {/* Sidebar for contacts */}
      <Box width="25%" bg="gray.100" p={4} borderRight="1px solid" borderColor="gray.200">
        <VStack spacing={4} align="stretch">
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text fontWeight="bold">Contact 1</Text>
            <Text fontSize="sm" color="gray.500">Last message preview...</Text>
          </Box>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text fontWeight="bold">Contact 2</Text>
            <Text fontSize="sm" color="gray.500">Last message preview...</Text>
          </Box>
          {/* Add more contacts as needed */}
        </VStack>
      </Box>

      {/* Main chat area */}
      <Flex direction="column" flex="1">
        <Box flex="1" p={4} overflowY="auto">
          {/* Chat messages */}
          <VStack spacing={4} align="stretch">
            <Box bg="gray.50" p={4} borderRadius="md" alignSelf="flex-start">
              <Text>User 1: Hello!</Text>
            </Box>
            <Box bg="blue.100" p={4} borderRadius="md" alignSelf="flex-end">
              <Text>User 2: Hi there!</Text>
            </Box>
            {/* Add more messages as needed */}
          </VStack>
        </Box>

        {/* Message input area */}
        <Box p={4} borderTop="1px solid" borderColor="gray.200">
          <Flex>
            <Textarea placeholder="Type a message..." resize="none" />
            <Button ml={2} colorScheme="blue">Send</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;