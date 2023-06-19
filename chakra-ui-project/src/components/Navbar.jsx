import {Flex, Heading, Box, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge} from '@chakra-ui/react';

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      status: 'success',
      variant: 'top-accent',
      duration: 4000,
      position: 'bottom-right',
      isClosable: true,
    });
  }

  return (
    <Flex as='nav' p='10px' marginBottom='40px' alignItems='center'>
      <Heading>Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Avatar name='mario' bg='orange.400' src='/img/mari.png'>
          <AvatarBadge w='1.3em' bg='teal.500'>
            <Text fontSize='xs' color='white'>3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
