<?php
class ControllerApiProduct extends Controller {
	public function index() {
		
		$json = array();
		$this->load->model('catalog/category');
		$this->load->model('catalog/product');
		$this->load->model('design/banner');

		$json['banner'] = $this->model_design_banner->getBanner(7);

		$data = array();
		$cat = $this->model_catalog_category->getCategories();
		foreach($cat as $c) {
			if ($c['category_id'] != '3321') {
				$data[] = array(
					'category_id' => $c['category_id'],
					'name' => $c['name']
				);
			}
		}


		$cat = $this->model_catalog_category->getCategories(3321);
		foreach($cat as $c) {
			$data[] = array(
				'category_id' => $c['category_id'],
				'name' => $c['name']
			);
			
		}

		$data['categorys'] = $data;



		$json['categorys'] = $data['categorys'];

		$products_lastest = $this->model_catalog_product->getProducts(array(
			"dp_new" => 1
		));

		$products = array();

		if (isset($this->request->get['category_id'])) {
			$category_id = $this->request->get['category_id'];

			$filter_data = array(
				'filter_category_id' => $category_id,
				'filter_sub_category' => true
			);
			$results = $this->model_catalog_product->getProducts($filter_data);
			foreach($results as $inx => $pd) {
				
				$products[] = array(
					'product_id' => $pd['product_id'],
					'name' => $pd['name'],
					'description' =>  $this->rep(strip_tags(html_entity_decode($pd['description'], ENT_QUOTES, 'UTF-8'))),
					'description_brief' => $this->rep(strip_tags(html_entity_decode($pd['description'], ENT_QUOTES, 'UTF-8'))),
					'image' => HTTP_SERVER.'image/'.$pd['image'],
					'price' => $pd['price'],
					'url' => HTTP_SERVER.'index.php?route=product/product&product_id='.$pd['product_id'],
				);
			}

		} else {
			
			if (isset($this->request->get['search'])) {

				$filter_data = array(
					'filter_name'         => $this->request->get['search'],
				);
				$results = $this->model_catalog_product->getProducts($filter_data);

				foreach($results as $inx => $pd) {
					
					$products[] = array(
						'product_id' => $pd['product_id'],
						'name' => $pd['name'],
						'description' =>  $this->rep(strip_tags(html_entity_decode($pd['description'], ENT_QUOTES, 'UTF-8'))),
						'description_brief' => $this->rep(strip_tags(html_entity_decode($pd['description'], ENT_QUOTES, 'UTF-8'))),
						'image' => HTTP_SERVER.'image/'.$pd['image'],
						'price' => $pd['price'],
						'url' => HTTP_SERVER.'index.php?route=product/product&product_id='.$pd['product_id'],
					);
				}

			} else {


				foreach($products_lastest as $inx => $pd) {
					
					$products[] = array(
						'product_id' => $pd['product_id'],
						'name' => $pd['name'],
						'description' =>  $this->rep(strip_tags(html_entity_decode($pd['description'], ENT_QUOTES, 'UTF-8'))),
						'description_brief' => $this->rep(strip_tags(html_entity_decode($pd['description'], ENT_QUOTES, 'UTF-8'))),
						'image' => HTTP_SERVER.'image/'.$pd['image'],
						'price' => $pd['price'],
						'url' => HTTP_SERVER.'index.php?route=product/product&product_id='.$pd['product_id'],

					);

				}
			}

		}

		$json['products'] = $products;





		$this->response->addHeader('Content-Type: application/json');
		$this->response->setOutput(json_encode($json));
	}

	private function rep($string) {
		$string = preg_replace('/\s+/', '', $string); 
		$string = str_replace("&nbsp;", " ", $string);
		return $string;
	}
}
