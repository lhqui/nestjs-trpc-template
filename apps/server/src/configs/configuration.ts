export default () => ({
    serverPort: parseInt(process.env.SERVER_PORT || '4000', 10),
  });
  