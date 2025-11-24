import MainLayout from '../components/layout/MainLayout';

const GoalsPage = () => (
  <MainLayout>
    <div className="hero min-h-[60vh] bg-base-100 rounded-box shadow-sm">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">My Goals</h1>
          <p className="py-6">Here you will manage your life objectives. The AI will help you define target amounts and timelines.</p>
          <div className="badge badge-lg">Coming Soon - Module 2</div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default GoalsPage;

