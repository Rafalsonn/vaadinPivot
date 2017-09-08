package pl.com.rafalsonn.client;

import com.vaadin.shared.ui.JavaScriptComponentState;

import java.util.List;

public class PivotTableState extends JavaScriptComponentState{
	public String csv;
	public List<String> rows;
	public List<String> cols;
	public String aggregatorName;
	public List<String> vals;
	public String rendererName;
}
