package vn.t3h.ls6.baitap;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class QueueMain {
	
	private static final String MUSIC_NAME_CONT = "msc";
	public static void main(String[] args) {
		Queue<Customer> listQueues = createCustomer();
		System.out.println("Size in queue: " + listQueues.size());
		Iterator<Customer> iterator = listQueues.iterator();
		List<Customer> listByNameFix = new ArrayList<Customer>();
		while (iterator.hasNext()) {
			Customer customer = iterator.next();
			if(customer.getMusicName().equals(MUSIC_NAME_CONT)) {
				listByNameFix.add(customer);
			}
		}
		System.out.println("customer co musicName la msc: " + listByNameFix.size());
		for(Customer cus : listByNameFix) {
			System.out.println("customer info: " + cus.toString());
		}
	}
	
	public static Queue<Customer> createCustomer() {
		Queue<Customer> customer = new LinkedList<Customer>();
		var cus01 = new Customer("1", "Cs1", "2020-07-18 10:20", "Ms1");
		var cus02 = new Customer("2", "Cs2", "2020-07-18 10:22", "Ms2");
		var cus03 = new Customer("3", "Cs3", "2020-07-18 10:25", MUSIC_NAME_CONT);
		var cus04 = new Customer("4", "Cs4", "2020-07-18 10:25", "Ms4");
		var cus05 = new Customer("5", "Cs5", "2020-07-18 10:25", "Ms5");
		var cus06 = new Customer("6", "Cs6", "2020-07-18 10:25", MUSIC_NAME_CONT);
		
		// add to queue
		customer.add(cus01);
		customer.add(cus02);
		customer.add(cus03);
		customer.add(cus04);
		customer.add(cus05);
		customer.add(cus06);
		
		return customer;
	}

}
