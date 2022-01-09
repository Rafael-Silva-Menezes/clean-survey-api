export default {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb://root:o9wsQKZ1B048a1rzi2bVT757zppk4le0Ma@10.167.72.47:27017/svx3_dev?authSource=admin',
  port: process.env.PORT || 5050,
};
