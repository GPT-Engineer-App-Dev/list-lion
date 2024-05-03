import { Box, Flex, Heading, Input, Button, List, ListItem, IconButton, useToast, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input === '') {
      toast({
        title: 'No task entered',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  console.log('Rendering Navbar...');
  console.log('Rendering input field...');
  console.log('Rendering task list...');

  return (
    <Box p={8} style={{ visibility: 'visible' }}>
      <Navbar />
      <Flex as="nav" justify="space-between" align="center" mb={8}>
        <Heading size="lg">Todo App</Heading>
      </Flex>
      <Flex mb={4}>
        <Input
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <Button onClick={addTask} ml={2} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <List spacing={3}>
        {tasks.map(task => (
          <ListItem key={task.id} d="flex" justifyContent="space-between" alignItems="center">
            <Box flex="1">{task.text}</Box>
            <IconButton
              icon={<FaEdit />}
              onClick={() => editTask(task.id, prompt('Edit task:', task.text))}
              colorScheme="yellow"
              aria-label="Edit Task"
            />
            <IconButton
              icon={<FaTrash />}
              onClick={() => deleteTask(task.id)}
              colorScheme="red"
              aria-label="Delete Task"
            />
          </ListItem>
        ))}
      </List>
      <Box as="footer" mt={10} py={5} px={8} bg="gray.100" textAlign="center">
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Todo App. All rights reserved.</Text>
        <Link to="/privacy-policy" style={{ textDecoration: 'none' }}>
          <Text fontSize="sm" color="blue.500" mt={2}>Privacy Policy</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Index;