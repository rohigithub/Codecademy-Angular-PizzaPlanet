app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
	$scope.mains = [
    {
      name: 'Beef Ravioli',
      description: 'Chopped beef wrapped in wheat dough',
      price: 6.00
    },
    {
      name: 'Pasta Carbonara',
      description: 'Spaghetti cooked with bacon slices and egg',
      price: 7.50
    },
    {
      name: 'Lasagna',
      description: 'Chopped beef baked with pasta leaves',
      price: 8.75
    }
  ];
  $scope.extras = [
    {
      name: 'Pana cotta',
      description: 'Divine mix of milk, gelatine and fruits',
      price: 4.30
    },
    {
      name: 'Espresso',
      description: 'A shot of espresso',
      price: 2.20
    },
    {
      name: 'Acqua Panna',
      description: 'Pure still water',
      price: 1.5
    }
  ];
}]);
