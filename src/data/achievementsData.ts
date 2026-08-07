import { Achievement } from '../types/progress';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-step',
    title: 'First Step',
    vietnameseTitle: 'Bước Đầu Tiên',
    description: 'Complete your very first lesson in Everybody Up 3!',
    icon: 'Sparkles',
    isUnlocked: false,
  },
  {
    id: 'vocab-master',
    title: 'Vocab Master',
    vietnameseTitle: 'Bậc Thầy Từ Vựng',
    description: 'Complete 5 Vocabulary modules with 100% cards reviewed.',
    icon: 'BookOpen',
    isUnlocked: false,
  },
  {
    id: 'speaking-star',
    title: 'Speaking Star',
    vietnameseTitle: 'Ngôi Sao Phản Xạ',
    description: 'Earn 3 stars on any AI Speaking assessment.',
    icon: 'Mic',
    isUnlocked: false,
  },
  {
    id: 'streak-3',
    title: '3-Day Streaker',
    vietnameseTitle: 'Chăm Chỉ 3 Ngày',
    description: 'Study English 3 days in a row.',
    icon: 'Flame',
    isUnlocked: false,
  },
  {
    id: 'perfect-quiz',
    title: 'Quiz Champion',
    vietnameseTitle: 'Vô Địch Thực Hành',
    description: 'Get a 100% score on any Practice Module quiz.',
    icon: 'Trophy',
    isUnlocked: false,
  },
  {
    id: 'checkup-hero',
    title: 'Check Up Hero',
    vietnameseTitle: 'Anh Hùng Ôn Tập',
    description: 'Pass any Check Up review unit with 3 stars.',
    icon: 'Award',
    isUnlocked: false,
  },
];
